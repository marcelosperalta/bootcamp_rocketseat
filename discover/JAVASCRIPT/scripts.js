console.log("----- comment -----");

console.log("Welcome"); // comment

// comment

/* 
comment
*/


console.log("----- data types -----");

// - string

console.log("string");
console.log("string 'string' ");
console.log('string "string" ');
console.log(`string "string" 'string'`);
console.log(`string 
            "string" 
            'string'`);
console.log(`string ${1 + 1}`);
// Template literals (Template strings) / string interpolation = `${ }`

// - number

console.log(1);
console.log(-1);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 / 2);
console.log(2 * 2);
console.log(-2 * 2);
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(-1, -2, -3, -4, -5, -6, -7, -8, -9, -0);
console.log(12.0);
console.log(-12.0);
console.log(NaN); // Not a Number
console.log(Infinity);

// - boolean

console.log(true);
console.log(false);
console.log(true === true);   // true
console.log(false === false); // true
console.log(true === false);  // false
console.log(true !== false);  // true

// - undefined vs null

console.log(undefined);          // something that does not exist
console.log(null);               // is a empty object
console.log(undefined === null); // false

// - object

console.log(
    {
//  key/property:
        property: "value"
    }
);
console.log({});
console.log({
    name: "Marcelo",
    idade: 40,
    run: function(){
        console.log("run");
    }
});

// - array ()

console.log([]);
console.log(["Marcelo", 40]);
console.log([1, 2, 3]);
console.log(["Marcelo", "Priscila"]);
console.log([
    1,
    "Marcelo",
    2,
    "Priscila",
    [1, 2]
]);


console.log("----- declarations -----");

// - var
var weather = "warm"
console.log(weather);
console.log("warm");
weather = "cold"
console.log(weather);

// - let 
var color = "blue"
console.log(color);
console.log("blue");
color = "red"
console.log(color);

// - const
const age = 40
console.log(age);
console.log(40);
// age = 41                  // TypeError: Assignment to constant variable.


console.log("----- data types -----");

console.log(typeof weather); // string
console.log(typeof color);   // string
console.log(typeof age);     // number

let number = "one";
console.log(number);
console.log(typeof number);  // string
number = 1;
console.log(number);
console.log(typeof number);  // number
number = true;
console.log(typeof number);  // boolean


console.log("----- scope -----");

// - block statement

// var           = global and local (hoisting)
// let and const = 

{
    const x = 0
    console.log(x); // 0
}
console.log(x);     // undefined
{
    const x = 1
    console.log(x); // 1
}
console.log(x);     // undefined

{
    let x = 1
    console.log(x);  // 1
}
console.log(x);      // undefined

{
    var x = 1
    console.log(1);  // 1
}
console.log(x);      // 1
x = 3
{
    console.log(x);  // 3
}

let yLet = 2
{
    console.log(yLet);  // 2

//  console.log(zLet);  // ReferenceError: Cannot access 'zLet' before initialization
    let zLet = 1
    console.log(zLet);  // 1
}
// console.log(zLet);   // ReferenceError: z is not defined

let yLet2 = 5
{
    console.log(yLet2);  // 5
}
console.log(yLet2);      // 5

const aConst = 2
{
    console.log(aConst);  // 2

//  console.log(bConst);  // ReferenceError: Cannot access 'bConst' before initialization
    const bConst = 1
    console.log(bConst);  // 1
}
// console.log(bConst);   // ReferenceError: b is not defined

const aConst2 = 10
{
    console.log(aConst2); // 10
}
console.log(aConst2);     // 10


// ----- variables names

// - case-sensitive

let André = "André"
let Andre = "Andre"
let andré = "andré"
let andre = "andre"
console.log(André, Andre, andré, andre);

let $varName = 2
let _varName = 2

// let 1varName = 2          // Invalid or unexpected token
// let your Number = 2       // Unexpected identifier
// let your-name = "Marcelo" // Unexpected token '-'

// - camelCase

let yourName = "Marcelo"

// - snake_case

let your_name = "Marcelo"


console.log("----- practicing -----");

var myName
myName = "Marcelo"
console.log(typeof myName); // string
console.log(myName);        // Marcelo
// let age = 20
// let isHuman = true
let age2, isHuman
age2 = 40
isHuman = true
console.log(myName, age2, isHuman);                 // Marcelo 40 true
console.log("Marcelo is 40 years old");             // Marcelo is 40 years old
// concatenate:
console.log(myName + " is " + age2 + " years old"); // Marcelo is 40 years old
console.log(myName + ' is ' + age2 + ' years old'); // Marcelo is 40 years old
// interpolation:
console.log(`${myName} is ${age2} years old`);      // Marcelo is 40 years old

// - object

const person = {
    name: "Marcelo",
    age: 40,
    weight: 86,
    isAdmin: true
}
console.log(person);
console.log(person.name);                                 // Marcelo
console.log(person.age);                                  // 40
console.log(`${person.name} is ${person.age} years old`); // Marcelo is 40 years old

// - array

const animals = [
    "Lion",
    "Monkey",
    "Cat",
    {
        name: "Dog",
        age: 3
    }
]
console.log(animals);         // Lion
console.log(animals[0]);      // Lion
console.log(animals[1]);      // Monkey
console.log(animals[2]);      // Cat
console.log(animals[3]);      // {name: "Dog", age: 3}
console.log(animals[3].name); // Dog
console.log(animals.length);  // 4

// - exercises

let weight

console.log(typeof weight); // undefined

let name2 = "Marcelo"
let age3 = 40
let weight2 = 86
let isSubscribed = true

let student = {
    name: "Marcelo",
    age: 40,
    weight: 86,
    isSubscribed: true
}
console.log(typeof student); // object
console.log(`${student.name} is ${student.age} and weighs ${student.weight}`);

var students = [student]
console.log(students);
console.log(students[0]);

const priscila = {
    name: "Priscila",
    age: 32,
    weight: 52,
    isSubscribed: true
}
students = [
    student,
    priscila
]
console.log(students);
//or
students[1] = priscila
console.log(students);

console.log(hoisting); // undefined
var hoisting = 1
// console.log(noHoisting1); // Cannot access 'hoisting2' before initialization
// let noHoisting1= 1
// console.log(noHoisting2); // Cannot access 'hoisting2' before initialization
// const noHoisting2 = 1


// Expressions and operators

// expressions
let num1 = 1
// or
let num2 = 1;

// ----- problem -----
// let num3 = 1  // <---------------------- without ";"
// (function() {
//     console.log("abc")
// })()
// ----- work -----
let num3 = 1;    // <---------------------- with ";"
(function() {
    console.log("abc") // abc
})()

// operators

// - unary
let num4 = 1
console.log(++num4);   // 2 // num4 + num4
let num5 = 1
console.log(--num5);   // 0 // num5 - num5
// - binary
let num6 = 1
console.log(num6 + 1); // 2
// - ternary
console.log(true ? "is true" : "is false");  // is true
console.log(false ? "is true" : "is false"); // is false

// new operator = left-hand-side expression > to create a new object
let name7 = new String("Marcelo")
name7.surname = "Peralta"
let age4 = new Number(23)
console.log(name7);          // String {"Marcelo"}
console.log(age4);           // Number {23}
console.log(name7, age4);    // String {"Marcelo"} 
                             // Number {23}
console.log(name7.surname);  // Peralta
let date = new Date("2021-03-24")
console.log(date);           // Wed Mar 24 2021 01:00:00 GMT+0100 (Central European Standard Time)
console.log(date.__proto__); // {constructor: ƒ, toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, …}

let test1 = "test"
console.log(test1.__proto__); // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
let test2 = 1
console.log(test2.__proto__); // Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}

// typeof 
console.log(typeof "Marcelo"); // string
console.log(typeof 10);        // number

// delete
const person2 = {
    name: "Marcelo",
    age: 40
}
console.log(person2); // {name: "Marcelo", age: 40}
delete person2.age
console.log(person2); // {name: "Marcelo"}

// arithmetic operators
console.log(2 + 2);   // 4
console.log(2 - 2);   // 0
console.log(2 * 2);   // 4
console.log(2 / 2);   // 1
console.log(2.2 + 2); // 4.2
console.log(2.2 - 2); // 0.20000000000000018
console.log(2.2 * 2); // 4.4
console.log(2.2 / 2); // 1.1

// - reminder
console.log(2 % 2 );  // 0

// - increment (++)
let increment = 0
console.log(increment++);        // 0
console.log(increment++);        // 1
console.log(increment++);        // 2
console.log(increment++);        // 3
let increment2 = 0
console.log(++increment2);       // 1
console.log(++increment2);       // 2
console.log(++increment2);       // 3
console.log(++increment2);       // 4

let xx = 3;
const y = xx++;
console.log(`xx:${xx}, y:${y}`); // expected output: "xx:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);   // expected output: "a:4, b:4"

// - decrement (--)
let decrement = 0
console.log(decrement--);       //  0
console.log(decrement--);       // -1
console.log(decrement--);       // -2
console.log(decrement--);       // -3

let decrement2 = 0
console.log(--decrement2);       // -1
console.log(--decrement2);       // -2
console.log(--decrement2);       // -3
console.log(--decrement2);       // -4

// exponentiation (**)
console.log(2 ** 2); //  4
console.log(3 ** 2); //  9
console.log(3 ** 3); // 27

// grouping operator ( )
let total1 = 2 + 3 * 3
console.log(total1); // 11
let total2 = 2 + (3 * 3)
console.log(total2); // 11
let total3 = (2 + 3) * 3
console.log(total3); // 15

// comparison operators
let comp1 = 1
let comp2 = 2
// == equal
console.log(comp1 == comp1);  // true
console.log(comp1 == 1);      // true
console.log(comp1 == "1");    // true
console.log(comp1 == comp2);  // false
// != not equal
console.log(comp1 != comp1);  // false
console.log(comp1 != 1);      // false
console.log(comp1 != "1");    // false
console.log(comp1 != comp2);  // true
// === strict equal
console.log(comp1 === comp1); // true
console.log(comp1 === 1);     // true
console.log(comp1 === "1");   // false
console.log(comp1 === comp2); // false
// !== strict not equal
console.log(comp1 !== comp1); // false
console.log(comp1 !== 1);     // false
console.log(comp1 !== "1");   // true
console.log(comp1 !== comp2); // true
// > greater than
console.log(comp1 > comp2);   // false
// >= greater than or equal   
console.log(comp1 >= comp2);  // false
// < less than
console.log(comp1 < comp2);   // true
// <= less than or equal
console.log(comp1 <= comp2);  // true

// assignment operators
let assignment
console.log(assignment); // undefined
// assignment
assignment = 1
console.log(assignment); // 1
// addition assignment
assignment += 1          // assignment = assignment + 1
console.log(assignment); // 2
// subtraction assignment
assignment -= 1          // assignment = assignment - 1
console.log(assignment); // 1
// multiplication assignment
assignment *= 1          // assignment = assignment * 1
console.log(assignment); // 1
// division assignment
let assignment2 = 4
assignment2 /= 2          // assignment = assignment / 2
console.log(assignment2); // 1
// remainder assignment
let assignment3 = 4
assignment3 %= 2          // assignment = assignment % 2
console.log(assignment3); // 0
// exponentiation assignment
let assignment4 = 4
assignment4 **= 2         // assignment = assignment ** 2
console.log(assignment4); // 16

// logical operators
let bread1 = true
let cheese1 = true

let bread2 = true
let cheese2 = false

let bread3 = false
let cheese3 = false

// AND - &&
console.log(true && true);      // true
console.log(false && true);     // false
console.log(true && false);     // false
console.log(bread1 && cheese1); // true
console.log(bread2 && cheese2); // false
console.log(bread3 && cheese3); // false

// OR - ||
console.log(true || true);      // true
console.log(false || true);     // true
console.log(true || false);     // true
console.log(false || false);    // false
console.log(bread1 || cheese1); // true
console.log(bread2 || cheese2); // true
console.log(bread3 || cheese3); // false

let bread4 = true
let cheese4 = false
// NOT - !
console.log(!bread4);  // false
console.log(!cheese4); // true

// conditional (ternary) operator
let bread5 = true
let cheese5 = true
const niceBreakfast1 = bread5 && cheese5 ? "good" : "bad"
console.log(niceBreakfast1); // good
let bread6 = false
let cheese6 = true
const niceBreakfast2 = bread6 && cheese6 ? "good" : "bad"
console.log(niceBreakfast2); // bad
let bread7 = true
const niceBreakfast3 = bread7 ? "good" : "bad"
console.log(niceBreakfast3); // good
let age5 = 18
const canDrive = age5 >= 18 ? "can drive" : "cannot drive"
console.log(canDrive);       // can drive

// string operators
console.log("a" + "a");     // aa
let alpha = "alpha"
console.log(alpha + "bet"); // alphabet
let testing = "test"
testing += "ing"            // testing = testing + "ing"
console.log(testing);       // testing

// (remember type conversion and coersion)
// falsy and truthy
console.log(true ? "true" : "false");  // true
console.log(false ? "true" : "false"); // false
//          falsy
console.log(0         ? "true" : "false"); // false (type coersion > falsy)
console.log(""        ? "true" : "false"); // false (type coersion > falsy)
console.log(null      ? "true" : "false"); // false (type coersion > falsy)
console.log(undefined ? "true" : "false"); // false (type coersion > falsy)
console.log(NaN       ? "true" : "false"); // false (type coersion > falsy)
//          truthy
console.log({ }       ? "true" : "false"); // true (type coersion > truthy)
console.log([ ]       ? "true" : "false"); // true (type coersion > truthy)
console.log(1         ? "true" : "false"); // true (type coersion > truthy)
console.log("0"       ? "true" : "false"); // true (type coersion > truthy)
console.log(Infinity  ? "true" : "false"); // true (type coersion > truthy)

