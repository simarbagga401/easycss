import fs from 'fs';
import { ColorRequest, BoxModelRequest } from './interfaces';

export const changeColor = ({ elementSelector, type, value }: ColorRequest) => {
  let data;
  switch (type) {
    case 'background':
      data = `${elementSelector}{background-color:${value}}`;
      break;

    case 'text':
      data = `${elementSelector}{color:${value}}`;
      break;

    case 'border':
      data = `${elementSelector}{border-color:${value}}`;
      break;

    default:
      break;
  }

  if (data) {
    fs.appendFile('../client-side/styles/some.scss', data, (err) => {
      if (err) console.error(err);
    });
  } else {
    console.error('writeStyle error');
  }
};

export const changeSize = ({
  elementSelector,
  type,
  value,
}: BoxModelRequest) => {
  let data;
  switch (type) {
    case 'border':
      data = `${elementSelector}{border:${value}}`;
      break;

    case 'border-radius':
      data = `${elementSelector}{border-radius:${value}}`;
      break;

    default:
      break;
  }

  if (data) {
    fs.appendFile('../client-side/styles/some.scss', data, (err) => {
      if (err) console.error(err);
    });
  } else {
    console.error('writeStyle error');
  }
};
