"use strict";
io.sockets.on('connection', (connection) => {
    console.log(`New Connection ${connection.id}`);
    connection.emit('init', {
        value: 'hello',
        id: connection.id,
    });
});
