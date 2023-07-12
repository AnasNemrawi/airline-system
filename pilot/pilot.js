'use strict';
require("dotenv").config()
const port = process.env.PORT || 3000
const http = `http://localhost:${port}`
const io = require("socket.io-client")
const socket = io.connect(http)



socket.on('newFlight', payload => {
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
        socket.emit('took-off', payload)
    }, 4000)
    setTimeout(() => {

        console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
        socket.emit('Arrived', payload)

    }, 7000);

})


// eventsPool.on("pilot", (payload) => {
//     setTimeout(() => {
//         console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
//         eventsPool.emit('took-off', payload)
//     }, 4000)
//     setTimeout(() => {
//         console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
//         eventsPool.emit('Arrived', payload)
//         console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);
//     }, 7000)
// })
