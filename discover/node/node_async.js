// nodemon index.js
// or
// node <enter>
// + code

// sync
function c() {
    console.log("c");
    return
}

function b() {
    console.log("b");
    return c()
} 

function a() {
    b()
    console.log("a");
    return
}

a()
// b
// c
// a
// undefined

// async
function f() {
    setTimeout(() => {console.log("f")}, 1000)
    return
}

function e() {
    console.log("e");
    return f()
} 

function d() {
    e()
    console.log("d");
    return
}

d()
// e
// d
// undefined
// f

function i() {
    setTimeout(() => {console.log("i")}, 0)
    return
}

function h() {
    console.log("h");
    return i()
} 

function g() {
    h()
    console.log("g");
    return
}

g()
// h
// g
// undefined
// i