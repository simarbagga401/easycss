"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocket = void 0;
const writeStyle_1 = require("./writeStyle");
// test
const handleSocket = (connection) => {
    connection.emit('serverConnected', {
        _id: connection.id,
        msg: 'websocket server connected',
    });
    connection.on('styleRequest', (data) => {
        console.log(data);
        writeStyle_1.changeStyle(data);
    });
};
exports.handleSocket = handleSocket;
