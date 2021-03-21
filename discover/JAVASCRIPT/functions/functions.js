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
    // const total = number3 + number4              // good practice
    // var total = number3 + number4                // good practice // with restrictions
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

function makeJuice(fruit1, fruit2) {
    return fruit1 + fruit2
}
const glass = makeJuice("banana", "apple")
console.log(glass);


// function scope
let subject1
function createNote1(subject1) {
    return subject1
}
console.log(createNote1(subject1)); // undefined

let subject2 = "create video"
function createNote2(subject2) {
    return subject2
}
console.log(subject2);              // create video
console.log(createNote2(subject2)); // create video

let subject3 = "create video"
function createNote3(subject3) { // -- with parameter
    subject3 = "study"
    return subject3
}
console.log(subject3);              // create video
console.log(createNote3(subject3)); // study
console.log(subject3);              // create video // <<<<<

let subject4 = "create video"
function createNote4() { // ------- // without parameter
    subject4 = "study"
    return subject4
}
console.log(subject4);              // create video
console.log(createNote4(subject4)); // study
console.log(createNote4());         // study
console.log(subject4);              // study        // <<<<<

let subject5
console.log(subject5);              // undefined
function createNote5() { // ------- // without parameter
    subject5 = "study"
    return subject5
}
console.log(subject5);              // undefined
console.log(createNote5());         // study
console.log(subject5);              // study        // <<<<<

let subject6
console.log(subject6);              // undefined
function createNote6() { // ------- // without parameter
    subject6 = "study"
}
console.log(subject6);              // undefined
createNote6();
console.log(subject6);              // study        // <<<<<


// function hoisting
sayMyName();
function sayMyName() {
    console.log("Marcelo");         // Marcelo
}

// sayMyName2();
// const sayMyName2 = function() {
//     console.log("Marcelo");         // Cannot access 'sayMyName2' before initialization
// }
// sayMyName2();
// var sayMyName2 = function() {
//     console.log("Marcelo");         // sayMyName2 is not a function
// }
const sayMyName3 = function() {
    console.log("Marcelo");
}
sayMyName3();                   // Marcelo
var sayMyName4 = function() {
    console.log("Marcelo");
}
sayMyName4();                   // Marcelo


// arrow function
const sayMyName5 = () => {
    console.log("Marcelo");
}
sayMyName5()                   // Marcelo

const sayMyName6 = (name) => {
    console.log(name);         
}
sayMyName6()                   // undefined
sayMyName6("Marcelo")          // Marcelo


// callback function
function sayMyName7(name) {
    console.log(name);
}
sayMyName7("Marcelo")          // Marcelo
sayMyName7(1)                  // 1
sayMyName7([1])                // [1]
sayMyName7({name: "Marcelo"})  // {name: "Marcelo"}
sayMyName7(true)               // true
sayMyName7(
    () => {
        console.log("Marcelo"); 
    }
) //  () => {
  //   console.log("Marcelo");
  // }

function sayMyName8(name) {
    console.log("before callback execution");

    name();

    console.log("after callback execution");
}
sayMyName8(
    () => {
        console.log("Marcelo"); 
    }
) // Marcelo

function sayMyName9() {
    function name() {
        console.log("Marcelo (sayMyName9)"); 
    }
    name()
}
sayMyName9() // Marcelo


// Function() constructor
// - creates a new Function object
function Person() {}
const marcelo1 = new Person()
console.log(marcelo1); // Person {}

function Person2(name) {
//  marcelo2
        this.name = name
}
const marcelo2 = new Person2("Marcelo")
const priscila2 = new Person2("Priscila")
console.log(marcelo2);  // Person2 {name: "Marcelo"}
console.log(priscila2); // Person2 {name: "Priscila"}

//       is a good practice use upper case
function Person3(name) {
    //  marcelo3
            this.name = name
            this.walk = function() {
                return this.name + " is walking"
            }
}
const marcelo3 = new Person3("Marcelo")
const priscila3 = new Person3("Priscila")
console.log(marcelo3.walk());  // Marcelo is walking
console.log(priscila3.walk()); // Priscila is walking

let nameString = new String("Marcelo")
console.log(nameString);    // String {"Marcelo"}
console.log(nameString[0]); // M

let newDate = new Date("2021-03-21")
console.log(newDate);       // Sun Mar 21 2021 01:00:00 GMT+0100 (Central European Standard Time)