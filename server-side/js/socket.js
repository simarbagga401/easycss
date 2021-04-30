"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocket = void 0;
const writeStyle_1 = require("./writeStyle");
const handleSocket = (connection) => {
    connection.emit('serverConnected', {
        _id: connection.id,
        msg: 'websocket server connected',
    });
    connection.on('changeColor', ({ elementSelector, type, value }) => {
        console.log(value);
        writeStyle_1.changeColor({ elementSelector, type, value });
    });
    connection.on('changeSize', ({ elementSelector, type, value }) => {
        console.log(value);
        writeStyle_1.changeSize({ elementSelector, type, color });
    });
};
exports.handleSocket = handleSocket;
