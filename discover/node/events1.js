const { EventEmitter } = require("events")
// console.log(EventEmitter);
const ev = new EventEmitter()
// console.log(ev);

ev.on("Hi!", (message) => {
    console.log("I hear you:", message);
})
ev.emit("Hi!", "Marcelo")
ev.emit("Hi!", "Priscila")
ev.emit("Hi!", "Mayk")

ev.once("Hello!", (message) => {
    console.log("I hear you:", message);
})
ev.emit("Hello!", "Diego")
ev.emit("Hello!", "Diego")
ev.emit("Hello!", "Diego")
