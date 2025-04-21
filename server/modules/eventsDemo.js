const EventEmitter = require('events');

// Créer une instance de l'EventEmitter
const myEmitter = new EventEmitter();

// Écouter un événement
myEmitter.on('greeting', () => {
  console.log('Hello from the event!');
});

// Émettre l'événement
module.exports = myEmitter.emit('greeting');
