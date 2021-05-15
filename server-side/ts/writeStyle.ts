import fs from 'fs';
import { StyleRequest } from './interfaces/index.interfaces';

export const changeStyle = ({ style, filePath }: StyleRequest): void => {
  // dynamic template for a style.
  let styleData;

  if (style.element === 'var') {
    styleData = `
  ${Object.values(style.property)[0]}: ${style.value};`;
  } else {
    styleData = `
${style.element} {
  ${Object.values(style.property)[0]}: ${style.value};
}`;
  }

  if (styleData === null || styleData === undefined) {
    console.error('writeStyle error: styleData is null or undefined');
  }

  fs.appendFile(`../client-side/${filePath}`, styleData, (err) => {
    if (err) console.error(`nodejs fs error:  ${err}`);
  });
};
