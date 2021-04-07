// async

const timeOut1 = 3000
const finished1 = () => console.log("done1!");
setTimeout(finished1, timeOut1)
console.log("Show1");

const timeOut2 = 3000
const finished2 = () => console.log("done2!");
//console.log(setTimeout(finished2, timeOut2))
let timer = setTimeout(finished2, timeOut2)
clearTimeout(timer)

const timeOut3 = 1000
const checking1 = () => console.log('checking1!');
setInterval(checking1, timeOut3)

const timeOut4 = 1000
const checking2 = () => console.log('checking2!');
let interval = setInterval(checking2, timeOut4)
setTimeout(() => clearInterval(interval), 3000)