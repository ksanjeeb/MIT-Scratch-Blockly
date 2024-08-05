import PreviewArea from './components/PreviewArea'
import BlocklyPlayground from './components/BlocklyPlayground';
import { createContext, useState } from 'react';

export const GlobalContext = createContext();

function App() {
  const [data, setData] = useState({})
  return (
    <>
    <GlobalContext.Provider value={{data, setData}}>
    <div className="bg-blue-100 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">          
          <BlocklyPlayground />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
    </GlobalContext.Provider>
    </>
  )
}

export default App
