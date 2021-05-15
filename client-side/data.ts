import { StyleRequest } from './interfaces/index.interfaces';

const customFilePath = null;
const defaultFilePath = '/styles/some.scss';
let filePath = customFilePath === null ? defaultFilePath : customFilePath;

export const styleRequestData: StyleRequest = {
  style: {
    element: '.btn',
    property: {
      backgroundColor: 'background-color',
    },
    value: 'red',
  },
  filePath,
};
