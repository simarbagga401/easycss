import { StyleRequest } from './interfaces/index.interfaces';
import liprollConf from './liproll.config.json';
import { checkDefaultFilePath } from './liprollConf.err';

const customFilePath = null;
checkDefaultFilePath(liprollConf.defaultFilePath);
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

// testing var
export const styleRequestData2: StyleRequest = {
  style: {
    element: 'var',
    property: {
      custom: '$primary-color',
    },
    value: 'grey',
  },
  filePath,
};
