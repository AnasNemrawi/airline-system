'use strict';
require("dotenv").config()
const port = process.env.PORT || 3000
const http = `http://localhost:${port}`
const io = require("socket.io-client")
const socket = io.connect(http)
const faker = require('faker');



socket.on('newFlight', (payload) => {
    console.log(`Manager : new flight with ID : ${payload.Details.flightID} has been scheduled.`);
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);

})


setInterval(() => {
    let flight = {
        event: 'new-flight',
        time: new Date(),
        Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: faker.datatype.uuid(),
            pilot: faker.name.firstName(),
            destination: faker.address.city(),
        },
    };


    socket.emit('newFlight', flight)

}, 10000)
socket.on('Arrived', (flight) => {

    console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pilot}`);
    console.log('---------------------------------------------------------------------------------------');

})