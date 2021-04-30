import cors from 'cors';
import express from 'express';
import { Socket } from 'socket.io';
import { handleSocket } from './socket';

// App configurations
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

// Testing route
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello from express server');
});

// Socket Connection
io.sockets.on('connection', (connection: Socket) => {
  console.log(`client ${connection.id} connected`);
  handleSocket(connection);
});
