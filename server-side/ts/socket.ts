import { Socket } from 'socket.io';
import { SocketStyleRequest } from './interfaces/index.interfaces';
import { changeStyle } from './writeStyle';

export const handleSocket = (connection: Socket): void => {
  connection.emit('serverConnected', {
    _id: connection.id,
    msg: 'websocket server connected',
  });

  connection.on('styleRequest', (data: SocketStyleRequest) => {
    console.log(data);
    changeStyle(data);
  });
};
