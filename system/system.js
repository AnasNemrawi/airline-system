'use strict'

require('dotenv').config();
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const airLine = io.of('/airline');


io.on('connection', socket => {
    console.log("the system is live in id", socket.id);

    socket.on('newFlight', (payload) => {
        io.emit('newFlight', (payload))
        payload.event = 'new-flight'
        payload.time = new Date(),

            console.log(`Flight : `, payload);

    })
    socket.on("took-off", (payload) => {

        payload.event = 'took_off'
        payload.time = new Date(),
            console.log('Flight : ', payload);
        airLine.emit("airline", payload)
    })

    socket.on("Arrived", (payload) => {
        payload.event = 'Arrived'
        payload.time = new Date(),
            console.log('Flight : ', payload);
    })

})

airLine.on('connection', (socket) => {
    console.log('Connected to the air line ,', socket.id);
});
