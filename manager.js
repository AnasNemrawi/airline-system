'use strict';

const eventsPool = require('./events');
require('./pilot')
require('./system')


eventsPool.on('newFlight', (payload) => {
    console.log(`Manager : new flight with ID : ${payload.Details.flightID} has been scheduled.`);
    console.log(`Flight : `, payload);
})