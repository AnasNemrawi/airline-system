'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const host = `http://localhost:${port}`;
const faker = require('faker');

const io = require('socket.io-client');
const socket = io.connect(host);

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
    socket.emit('light');
}, 10000)
