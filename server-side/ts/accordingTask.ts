import { StyleRequest } from './interfaces';

const accordingTask = (req: StyleRequest) => {
  switch (req.type) {
    case 'Layout':
      break;

    case 'BoxModel':
      break;

    case 'Color':
      break;
    case 'Size':
      break;

    case 'Position':
      break;

    default:
      break;
  }
};

export default {
  accordingTask,
};
