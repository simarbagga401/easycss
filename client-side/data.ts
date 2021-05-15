import { StyleRequest } from './interfaces/index.interfaces';
import liprollConf from './liproll.config.json';
import { checkDefaultFilePath, checkLiprollConf } from './liprollConf.err';

const customFilePath = null;
checkDefaultFilePath(liprollConf.defaultFilePath);
checkLiprollConf(); // check and throw err if liproll.config.json does'nt exists
let filePath =
  customFilePath === null ? liprollConf.defaultFilePath : customFilePath;

export const styleRequestData: StyleRequest = {
  style: {
    element: '.btn',
    property: {
      backgroundColor: 'background-color',
    },
    value: 'pink',
  },
  filePath,
};
