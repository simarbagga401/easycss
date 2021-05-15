import fs from 'fs';
import { StyleRequest } from './interfaces/index.interfaces';

export const changeStyle = ({ style, filePath }: StyleRequest): void => {
  // dynamic template for a style.
  const data = `
${style.element} {
  ${Object.values(style.property)[0]}: ${style.value};
}`;

  if (data) {
    fs.appendFile(`../client-side/${filePath}`, data, (err) => {
      if (err) console.error(err);
    });
  } else {
    console.error('writeStyle error');
  }
};
