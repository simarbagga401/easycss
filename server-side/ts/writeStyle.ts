import fs from 'fs';
import { SocketStyleRequest } from './interfaces/index.interfaces';

export const changeStyle = ({
  element,
  property,
  value,
}: SocketStyleRequest): void => {
  const data = `${element} { ${property}:${value} }`;

  if (data) {
    fs.appendFile('../client-side/styles/some.scss', data, (err) => {
      if (err) console.error(err);
    });
  } else {
    console.error('writeStyle error');
  }
};
