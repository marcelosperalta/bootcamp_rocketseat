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
console.log("End");

// function expression
// anonymous function
//                  parameters
const sum = function(number1, number2) {
    console.log(number1 + number2);
}
// console.log(number1); // number1 is not defined
sum(2, 3)                // arguments
// console.log(number1); // number1 is not defined