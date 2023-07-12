'use strict';

require('dotenv').config();
const port = process.env.PORT || 3001;
const host = `http://localhost:${port}/airline`;

const io = require('socket.io-client');
const socket = io.connect(host);

socket.on('airline', payload => {
    console.log('Running the airline,', payload);
})