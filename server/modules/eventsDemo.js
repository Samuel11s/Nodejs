const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Listen for an event
myEmitter.on('greeting', () => {
  console.log('Hello from the event!');
});

// Emit the event
myEmitter.emit('greeting');

// Export the emitter instance (not the result of emit)
module.exports = myEmitter;