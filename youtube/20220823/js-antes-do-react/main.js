// document.body.innerText = "Hello World"

// Nullish Coalescing Operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

const age = 0;

// 0, "", [], false, undefined, null => Falsy

// document.body.innerText = "Your age is: " + (age || "No information") // const age = 0; = No information
document.body.innerText = "Your age is: " + (age ?? "No information")    // const age = 0; = 0