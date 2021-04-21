"use strict";
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const style_1 = __importDefault(require("./style"));
const app = express_1.default();
app.use(cors_1.default());
const port = 3001;
const server = app.listen(port, () => console.log(`app listening ${port}`));
const socketCorsObject = {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
};
const io = require('socket.io')(server, socketCorsObject);
app.get('/', (req, res) => {
    res.send('hello from express server');
});
io.sockets.on('connection', (connection) => {
    console.log(`New Connection ${connection.id}`);
    connection.emit('init', {
        value: 'hello',
        id: connection.id,
    });
    connection.on('styleMyBtn', (res) => {
        console.log(res.task);
        style_1.default.writeCssFile();
    });
});
