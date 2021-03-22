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


// prototype
// __proto__
"Marcelo".__proto__
23.0.__proto__
"Marcelo".length
true.__proto__
23.0.hasOwnProperty()

// Type conversion (or typecasting) vs Type coercion
console.log("9" + 5);         // 95 // Type coercion
console.log(Number("9") + 5); // 14 // Type onversion

// Strings and Numbers
let string = "123"
console.log(Number(string)); // 123
let number7 = 321
console.log(String(number7)); // 321

// Counting characters and digits
let word ="Counting"
console.log(word.length);            // 8
let number8 = 1234
console.log(String(number8).length); // 4

// Decimal places
let number9 = 546.546546545
console.log(number9.toFixed(2).replace(".", ","));         // 546,54
console.log(Number(number9.toFixed(2)));                   // 546.55
console.log(Number(number9.toFixed(2).replace(".", ","))); // NaN ("," turned it in a String)
console.log(Number(number9.toFixed(2).replace(".", "."))); // 546.55

// uppercase and lowecase
let phrase1 = "Letter case is the distinction between..."
console.log(phrase1.toLowerCase()); // letter case is the distinction between...
console.log(phrase1.toUpperCase()); // LETTER CASE IS THE DISTINCTION BETWEEN...

// searching words, letters...
let phrase2 = "Letter case is the distinction between..."
console.log(phrase2.includes("Love")); // false
console.log(phrase2.includes("case")); // true
console.log(phrase2.includes("Case")); // false

// split Strings / join 
let phrase3 = "Letter case is the distinction between..."
let myArray1 = phrase3.split(" ")
console.log(myArray1);             // ["Letter", "case", "is", "the", "distinction", "between..."]
let myArray2 = phrase3.split("o")
console.log(myArray2);             // ["Letter case is the distincti", "n between..."]
let myArray4 = phrase3.split("i")
console.log(myArray4);             // ["Letter case ", "s the d", "st", "nct", "on between..."]
let phrase4 = "Letter"
let myArray3 = phrase4.split("")
console.log(myArray3);             // ["L", "e", "t", "t", "e", "r"]
let phraseWithUnderscore = myArray1.join("_")
console.log(phraseWithUnderscore); // Letter_case_is_the_distinction_between..

// create a Array using constructor
let myArray5 = new Array(10)
console.log(myArray5); // [empty × 10]
let myArray6 = new Array("a", "b", "c")
console.log(myArray6); // ["a", "b", "c"]
let myArray7 = new Array(1, 2, 3)
console.log(myArray7); // [1, 2, 3]
let myArray8 = new Array(1, 2, 3, "a", 4, "b")
console.log(myArray8); // [1, 2, 3, "a", 4, "b"]
let myArray9 = new Array(1, 2, 3, [], 4, "b")
console.log(myArray9); // [1, 2, 3, Array(0), 4, "b"]

// array elements
console.log(["a", "b", "c"].length); // 3

console.log([
    "a", 
    "b", 
    function(){ return "Hi" }
].length);                           // 3

console.log([                        // index:
    "a",                             // 0
    "b",                             // 1
    function(){ return "Hi" },       // 2
    
][2]());                             // Hi

console.log([                        // index:
    "a",                             // 0
    "b",                             // 1
    function(){ return "Hi" },       // 2
    
][0]);                               // a

console.log([                        // index:
    "a",                             // 0
    "b",                             // 1
    function(name){ return name },   // 2
    
][2]("Marcelo"));                    // Marcelo

console.log([                        // index:
    "a",                             // 0
    {type: "array"},                 // 1
    function(name){ return name },   // 2
    
][1].type);                          // array

console.log([                        // index:
    "a",                             // 0
    {
        type: "array",                  // 1
        name: "test"
    },                  
    function(name){ return name },   // 2
    
][1].name);                          // test

// String to Array
let word2 = "string"
console.log(Array.from(word2)); // ["s", "t", "r", "i", "n", "g"]

// Array manipulation
let techs = ["HTML", "CSS", "JS"]
techs.push("Node.js");
console.log(techs) // ["HTML", "CSS", "JS", "Node.js"]
techs.unshift("SQL");
console.log(techs) // ["SQL", "HTML", "CSS", "JS", "Node.js"]
techs.pop();
console.log(techs) // ["SQL", "HTML", "CSS", "JS"]
techs.pop();
console.log(techs) // ["SQL", "HTML", "CSS"]
techs.shift();
console.log(techs) // ["HTML", "CSS"]
techs.shift();
console.log(techs) // [CSS"]

let techs2 = ["HTML", "CSS", "JS"]
console.log(techs2.slice(1, 3)) // ["CSS", "JS"]
console.log(techs2.slice(1, 2)) // ["CSS"]
console.log(techs2.slice(1, 1)) // []
console.log(techs2.slice(0, 1)) // ["HTML"]

let techs3 = ["HTML", "CSS", "JS"]
console.log(techs3.splice(1, 1))  // ["CSS"]
console.log(techs3);              // ["HTML", "JS"]
console.log(techs3.splice(1, 1))  // ["JS"]
console.log(techs3);              // ["HTML"]
let techs4 = ["HTML", "CSS", "JS"]
console.log(techs4.splice(1, 2))  // ["CSS", "JS"]
console.log(techs4);              // ["HTML"]

let techs5 = ["HTML", "CSS", "JS"]
let index = techs5.indexOf("CSS")
console.log(index);                  // 1
console.log(techs5.splice(index, 1)) // ["CSS"]
console.log(techs5);                 // ["HTML", "JS"]
