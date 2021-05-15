import fs from 'fs';
import { StyleRequest } from './interfaces/index.interfaces';

export const changeStyle = ({
  element,
  property,
  value,
}: StyleRequest): void => {
  const data = `
${element} {
  ${Object.values(property)[0]}: ${value};
}`;

  if (data) {
    fs.appendFile('../client-side/styles/some.scss', data, (err) => {
      if (err) console.error(err);
    });
  } else {
    console.error('writeStyle error');
  }
};
