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