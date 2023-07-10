
const faker = require('faker');

const eventsPool = require('./events');
require('./pilot')
require('./manager')
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

eventsPool.on('controls', (payload) => {
    setInterval(() => {
        payload.event = 'new-flight'
        payload.time = new Date(),

            eventsPool.emit('newFlight', payload)
        eventsPool.emit('pilot', payload)
    }, 10000)
})

eventsPool.emit('controls', flight)

