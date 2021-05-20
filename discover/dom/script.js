// Do the tests opening the browser > inspect > console

// getElementById() > element
const elementID = document.getElementById('blog-title');
console.log(elementID);

// getElementsByClassName() > HTMLCollection
const elementsClass = document.getElementsByClassName("classOne");
console.log(elementsClass);

// getElementsByTagName() > HTMLCollection
const elementsTag1 = document.getElementsByTagName('meta');
console.log(elementsTag1);
const elementsTag2 = document.getElementsByTagName('body');
console.log(elementsTag2);

// querySelector() > element
const elementsSelector1 = document.querySelector('.classOne');
console.log(elementsSelector1);
const elementsSelector2 = document.querySelector('#idOne');
console.log(elementsSelector2);

// querySelectorAll() > NodeList
const elementsSelectorAll = document.querySelectorAll('.classOne');
console.log(elementsSelectorAll);
elementsSelectorAll.forEach(el => console.log(el)) // works with NodeLists