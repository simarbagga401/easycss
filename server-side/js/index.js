"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const socket_1 = require("./socket");
// App configurations
const app = express_1.default();
app.use(cors_1.default());
const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`app listening at ${port}`));
const socketCorsObject = {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
};
const io = require('socket.io')(server, socketCorsObject);
// Testing route
app.get('/', (req, res) => {
    res.send('Read Documentation for something at https://something.dev');
});
// Socket Connection
io.sockets.on('connection', (connection) => {
    console.log(`client ${connection.id} connected`);
    socket_1.handleSocket(connection);
});
