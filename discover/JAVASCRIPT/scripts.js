console.log("Welcome"); // comment

// comment

/* 
comment
*/

// ----- data types:

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