const { on } = require('cluster');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
let socketConnections = new Set();

io.on('connection', OnConnected);

function OnConnected(socket) {
    console.log('A user connected:', socket.id);
    socketConnections.add(socket.id);
    io.emit('client-total', socketConnections.size);

    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        socketConnections.delete(socket.id);
        io.emit('client-total', socketConnections.size);
    });

    socket.on('message', (data) => {
        console.log(data);
       socket.broadcast.emit('chat-message', data);
    });

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data);
    });
}