const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('please turn off the motor!');
  setTimeout(() => {
    console.log('A Gentle reminder , please turn off the motor!'); 
  }, 3000);
  
});

console.log("The script is running")
console.log("The script is still running")
myEmitter.emit('WaterFull');