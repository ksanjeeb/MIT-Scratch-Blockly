import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import CatSprite from './CatSprite';
import Draggable from 'react-draggable';
import { Flag, Github, RotateCcw, Undo2Icon } from 'lucide-react';
import { GlobalContext } from '../App';
import { throttle } from 'lodash';

export default function PreviewArea() {
  const { data } = useContext(GlobalContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [animation, setAnimation] = useState(null);
  const [text, setText] = useState({ message: '', duration: 0, animation: false });
  const [size, setSize] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [history, setHistory] = useState([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const pointTowardsMouse = () => {
    const rect = document.getElementById("sprite").getBoundingClientRect();
    const svgCenterX = rect.left + rect.width / 2;
    const svgCenterY = rect.top + rect.height / 2;

    const deltaX = mousePositionRef.current.x - svgCenterX;
    const deltaY = mousePositionRef.current.y - svgCenterY;
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    if (angle < 0) {
      angle += 360;
    }
    return angle;
  };

  const startAnimation = useCallback((event_type = 'when_flag_clicked') => {
    if (data && data.length > 0) {
      const actions = data.filter(action => action.type === event_type);
      if (actions.length > 0) {
        setHistory(prev => [...prev, { position, rotation, size, text }]);
        actions.forEach(action => executeAction(action));
      }
    }
  }, [data, position, rotation, size, text, animation]);

  const executeAction = (action) => {
    const { type, fields, next } = action;
    setPlaying(true);
    switch (type) {
      case 'go_to':
        setPosition({ x: fields.x_position, y: fields.y_position });
        break;
      case 'go_to_random':
        setPosition({ x: Math.random() * 400, y: Math.random() * 400 });
        break;
      case 'clockwise':
        setRotation(rotation + fields.angle);
        break;
      case 'anticlockwise':
        setRotation(rotation - fields.angle);
        break;
      case 'glide':
        setAnimation({ type: 'glide', duration: fields.seconds * 1000 });
        setPosition({ x: fields.x_position, y: fields.y_position });
        setTimeout(() => { setAnimation(null) }, fields.seconds * 1000)
        break;
      case 'glide_random':
        setAnimation({ type: 'glide', duration: fields.seconds * 1000 });
        setPosition({ x: Math.random() * 400, y: Math.random() * 400 });
        setTimeout(() => { setAnimation(null) }, fields.seconds * 1000)
        break;
      case 'point_in_direction':
        setRotation(fields.direction);
        break;
      case 'point_towards':
        if (fields.target === 'MOUSE_POINTER') {
          setRotation(pointTowardsMouse());
          setAnimation(null);
        }
        break;
      case 'move':
        setPosition(prev => ({ ...prev, x: prev.x + fields.x_position }));
        break;
      case 'change_x_by':
        setPosition(prev => ({ ...prev, x: prev.x + fields.delta_x }));
        break;
      case 'set_x':
        setPosition(prev => ({ ...prev, x: fields.x_position }));
        break;
      case 'change_y_by':
        setPosition(prev => ({ ...prev, y: prev.y + fields.delta_y }));
        break;
      case 'set_y':
        setPosition(prev => ({ ...prev, y: fields.y_position }));
        break;
      case 'say_for_seconds':
        setText({ message: fields.message, duration: fields.seconds * 1000, animation: false });
        setTimeout(() => setText({ message: '', duration: 0, animation: false }), fields.seconds * 1000);
        break;
      case 'say':
        setText({ message: fields.message, duration: 100, animation: false });
        break;
      case 'think_for_seconds':
        setText({ message: fields.message, duration: fields.seconds * 1000, animation: true });
        setTimeout(() => setText({ message: '', duration: 0, animation: false }), fields.seconds * 1000);
        break;
      case 'think':
        setText({ message: fields.message, duration: 100, animation: true });
        break;
      case 'change_size':
        setSize(size + fields.size);
        break;
      default:
        break;
    }

    if (next && next.block) {
      setTimeout(() => executeAction(next.block), 10);
    } else {
      setPlaying(false);
    }
  };

  const undoAction = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setPosition(lastState.position);
      setRotation(lastState.rotation);
      setSize(lastState.size);
      setText(lastState.text);
      setHistory(history.slice(0, -1));
    }
  };



  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setRotation(0);
    setSize(0);
    setText({ message: '', duration: 0, animation: false });
    setHistory([]);
    setPlaying(false);
    setAnimation(null);
  };

  // const stop = () => { // This logic is not working as expected
  //   setPlaying(false);
  //   setAnimation(null);
  // };




  useEffect(() => {
    const handleMouseMove = throttle((event) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };
    }, 200);

    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        startAnimation("when_key_pressed");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [startAnimation]);

  return (
    <div className="flex-none w-full">
      <div className="flex flex-row p-4 gap-4 justify-between pr-6">
        <div className='h-8 w-20 flex items-center justify-center'>
          <img src='/scratch.png' alt="Scratch Logo" className='h-full w-full object-contain' />
        </div>
        <div className='flex flex-row gap-4 justify-end z-10'>
          {history.length > 0 && (
            <div
              onClick={undoAction}
              title='Undo'
              className='cursor-pointer self-center flex flex-row gap-1'
            >
              <p className='font-semibold'>{history.length}</p >
              <Undo2Icon />
            </div>
          )}
          <div
            onClick={() => startAnimation("when_flag_clicked")}
            title={"Run"}
            className={`cursor-pointer self-center ${playing ? "pointer-events-none" : ""}`}
          >
            <Flag fill={playing ? "gray" : "green"} color='green' />
          </div>

          <div
            onClick={reset}
            title='Reset'
            className='cursor-pointer self-center'
          >
            <RotateCcw />
          </div>
          {/* <div
          onClick={stop}
          title='Stop'
          className='cursor-pointer self-center'
        >
          <StopCircle />
        </div> */}
          <div
            onClick={() => window.open("https://github.com/ksanjeeb/MIT-Scratch-Blockly", "_blank")}
            title='Get the code! - github.com/ksanjeeb'
            className='cursor-pointer ml-1 bg-gray-200 rounded-xl p-1'
          >
            <Github />
          </div>
        </div>

      </div>
      <Draggable className="h-[calc(100vh_-_4rem)] overflow-y-auto p-2 relative border">
        <div
          className="relative"
          style={{
            left: position.x,
            top: position.y,
            transition: animation ? `${animation.duration || 0}ms` : 'none',
          }}
          onClick={() => startAnimation("when_sprite_clicked")}
        >
          <CatSprite
            style={{ transform: `rotate(${rotation}deg)` }}
            size={size}
            tooltipText={text.message}
            showTooltip={text.duration > 0}
            animation={text?.animation}
          />
        </div>
      </Draggable>
    </div>
  );
}
