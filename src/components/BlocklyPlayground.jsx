import { useContext, useCallback, useMemo } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import * as Blockly from 'blockly';
import { eventBlocks, looksBlocks, motionBlocks } from '../sharedComponent/blocks';
import { GlobalContext } from '../App';

Blockly.defineBlocksWithJsonArray([...eventBlocks, ...looksBlocks, ...motionBlocks]);

const useToolboxConfig = () => useMemo(() => ({
  kind: 'flyoutToolbox',
  contents: [
    { kind: 'label', text: 'Event', 'web-class': 'event-label' },
    ...eventBlocks.map(block => ({ kind: 'block', type: block.type })),
    { kind: 'label', text: 'Motion', 'web-class': 'motion-label' },
    ...motionBlocks.map(block => ({ kind: 'block', type: block.type })),
    { kind: 'label', text: 'Looks', 'web-class': 'looks-label' },
    ...looksBlocks.map(block => ({ kind: 'block', type: block.type })),
  ],
}), []);

const useWorkspaceConfig = () => useMemo(() => ({
  grid: {
    spacing: 20,
    length: 3,
    colour: '#fff',
    snap: true,
  },
}), []);

function BlocklyPlayground() {
  const { setData } = useContext(GlobalContext);
  const toolboxConfig = useToolboxConfig();
  const workspaceConfig = useWorkspaceConfig();

  const handleJsonChange = useCallback((e) => {
    setData(e?.blocks?.blocks);
  }, [setData]);

  return (
    <BlocklyWorkspace
      onJsonChange={handleJsonChange}
      className="w-full h-full"
      toolboxConfiguration={toolboxConfig}
      workspaceConfiguration={workspaceConfig}
    />
  );
}

export default BlocklyPlayground;
