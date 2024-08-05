import  { useContext } from "react";
import { BlocklyWorkspace } from "react-blockly";
import * as Blockly from "blockly";
import { eventBlocks, looksBlocks, motionBlocks } from "../sharedComponent/blocks";
import { GlobalContext } from "../App";
// import { BlocksInitializer } from "../sharedComponent/initializer";

// BlocksInitializer();
Blockly.defineBlocksWithJsonArray([...eventBlocks, ...looksBlocks, ...motionBlocks]);

const toolbox = {
  kind: "flyoutToolbox",
  
  contents:  [
    {
      "kind": "label",
      "text": "Motion",
      "web-class": "lable-class"
    },
    ...motionBlocks.map((block) => ({kind: "block",type: block.type})),
    {
      "kind": "label",
      "text": "Looks",
      "web-class": "lable-class"
    },
    ...looksBlocks.map((block) => ({kind: "block",type: block.type})),
    {
      "kind": "label",
      "text": "Event",
      "web-class": "lable-class"
    },
    ...eventBlocks.map((block) => ({kind: "block",type: block.type})),
  ]
};

// const newToolBox = {
//   "kind": "categoryToolbox",
//   "contents": [
//     {
//       "kind": "category",
//       "name": "Motion",
//       "contents": [
//         {
//           "kind": "label",
//           "text": "Motion",
//           "web-class": "motion-class"
//         },
//         ...motionBlocks.map((block) => ({kind: "block",type: block.type})),
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "Looks",
//       "contents": [
//         {
//           "kind": "label",
//           "text": "Looks",
//           "web-class": "look-class"
//         },
//         ...looksBlocks.map((block) => ({kind: "block",type: block.type})),
//       ]
//     },
//     {
//       "kind": "category",
//       "name": "Event",
//       "contents": [
//         {
//           "kind": "label",
//           "text": "Event",
//           "web-class": "event-class"
//         },
//         ...eventBlocks.map((block) => ({kind: "block",type: block.type})),
//       ]
//     },
//   ]
// }

function BlocklyPlayground() {
  const {setData} = useContext(GlobalContext)
  const handleJsonChange = (e) => {
    setData(e?.blocks?.blocks)
        console.log(e?.blocks?.blocks);
  };

  return (
      <BlocklyWorkspace
        onJsonChange={handleJsonChange}
        className="w-full h-full"
        toolboxConfiguration={toolbox}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#fff",
            snap: true,
          },
        }}
      />
  );
}
export default BlocklyPlayground;
