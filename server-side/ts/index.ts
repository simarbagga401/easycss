import cors from 'cors';
import express from 'express';
import { Socket } from 'socket.io';
import style from './style';

const app: express.Application = express();
app.use(cors());
const port = 3001;
const server = app.listen(port, () => console.log(`app listening ${port}`));

const socketCorsObject = {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
};

const io = require('socket.io')(server, socketCorsObject);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello from express server');
});

io.sockets.on('connection', (connection: Socket) => {
  console.log('client connected successfully');

  connection.on('styleReq', (res: { task: string }) => {
    console.log(res.task);
    // style.writeCssFile(res);
  });
});
