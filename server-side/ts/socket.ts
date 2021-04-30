import { Socket } from 'socket.io';
import { ColorRequest, BoxModelRequest } from './interfaces';
import { changeColor, changeSize } from './writeStyle';

export const handleSocket = (connection: Socket) => {
  connection.emit('serverConnected', {
    _id: connection.id,
    msg: 'websocket server connected',
  });

  connection.on(
    'changeColor',
    ({ elementSelector, type, value }: ColorRequest) => {
      console.log(value);
      changeColor({ elementSelector, type, value });
    },
  );

  connection.on(
    'changeSize',
    ({ elementSelector, type, value }: BoxModelRequest) => {
      console.log(value);
      changeSize({ elementSelector, type, color });
    },
  );
};
