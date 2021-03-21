console.log(`
functions

`);

function createPhrases() {
    console.log("Studying is fun");
    console.log("Patience and persistence");
    console.log("Revision is the mother of learning");
}
// execute/run/call/invoke
createPhrases()
createPhrases()
createPhrases()

// function expression
// anonymous function
//                  parameters
const sum = function(number1, number2) {
    console.log(number1 + number2);
}
// console.log(number1); // number1 is not defined
sum(2, 3)                // arguments
// console.log(number1); // number1 is not defined
sum(5, 7)
let number1 = 34
let number2 = 25
sum(number1, number2)                               // 59
console.log(`The number 1 is ${number1}`);          // The number 1 is 34
console.log(`The number 1 is ${number2}`);          // The number 2 is 25
console.log(`The sum is ${sum(number1, number2)}`); // 59
                                                    // The sum is undefined
const sum2 = function(number3, number4) {
    total = number3 + number4                       //    <<<<< ***** Don't do that *****
    // let total = number3 + number4                // good practice
    // var total = number3 + number4                // good practice
    // const total = number3 + number4              // good practice
    return total
}
let number3 = 34
let number4 = 25
console.log(`The number 1 is ${number3}`);           // The number 1 is 34
console.log(`The number 1 is ${number4}`);           // The number 2 is 25
// console.log(total);                               // total is not defined
console.log(`The sum is ${sum2(number3, number4)}`); // The sum is 59
console.log(total);                                  // 59 <<<<< ***** Don't do that *****

const sum3 = function(number5, number6) {
    var total2 = number5 + number6
    // let total2 = number5 + number6
    // const total2 = number5 + number6
    return total2
}
let number5 = 34
let number6 = 25
console.log(`The sum is ${sum3(number5, number6)}`);  // The sum is 59
// console.log(total2);                               // total2 is not defined