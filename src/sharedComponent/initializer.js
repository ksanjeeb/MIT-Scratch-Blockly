import * as Blockly from "blockly/core";
import blocks from "./blocks";

export const BlocksInitializer =() => {
  Blockly.defineBlocksWithJsonArray(blocks);
  // Blockly.Blocks[BlockTypes.GlobalDataSet] = {
  // 	init: function() {
  // 		this.jsonInit(blocks.find(item => item.type === BlockTypes.GlobalData));
  // 		console.log(this, this.getFieldValue('actionName'));
  // 		// Assign 'this' to a variable for use in the tooltip closure below.
  // 		this.setTooltip(() => {
  // 			return 'Add a number to variable "%1".'.replace('%1',
  // 				this.getFieldValue('actionName'));
  // 		});
  // 	}
  // };
};
