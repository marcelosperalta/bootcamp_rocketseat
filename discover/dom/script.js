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


// textContent
const element1 = document.querySelector('h2');
element1.textContent = "Hello";
console.log(element1.textContent);

// innerText
const element2 = document.querySelector('h3');
element2.innerText = "Hello Again";
console.log(element2.innerText);

// innerHTML
const element3 = document.querySelector('h4');
element3.innerHTML = "Hello!!!";
console.log(element3.innerHTML);
const element4 = document.querySelector('h5');
element4.innerHTML = "Hello!!! <small>Hi!!!</small>";
console.log(element4.innerHTML);

// value
const element5 = document.querySelector('input');
console.log(element5.value);
element5.value = "New value";

// attributes
const header = document.querySelector("header")
header.setAttribute("id", "header")
const headerID = document.querySelector('#header')
console.log(headerID)
console.log(headerID.getAttribute("id"))
header.removeAttribute("id")
header.setAttribute("class", "bg header")
console.log(headerID.getAttribute("class"))

// style changing
const elementStyle = document.querySelector("body")
elementStyle.style.backgroundColor = "#fff000"
console.log(elementStyle.style.backgroundColor)
// classList
const elementClassList = document.querySelector("body")
console.log(elementClassList.classList)
elementClassList.classList.add("active", "green")
console.log(elementClassList)
elementClassList.classList.remove("active")
elementClassList.classList.toggle("active") // on/off

// parentNode parentElement
const body = document.querySelector("body")
console.log(body.parentNode);
console.log(body.parentElement);
const h6 = document.querySelector("h6")
console.log(h6.parentNode);
console.log(h6.parentElement);

// childNodes children
const child = document.querySelector("header")
console.log(child.childNodes);
console.log(child.children);

// firstChild firstElementChild
const first = document.querySelector("footer")
console.log(first.firstChild);
console.log(first.firstElementChild);

// lastChild lastElementChild
const last = document.querySelector("footer")
console.log(last.lastChild);
console.log(last.lastElementChild);

// nextSibling nextElementSibling
const siblingNext = document.querySelector("h2")
console.log(siblingNext.nextSibling);
console.log(siblingNext.nextElementSibling);

// previousSibling previousElementSibling
const siblingPrevious = document.querySelector("h5")
console.log(siblingPrevious.previousSibling);
console.log(siblingPrevious.previousElementSibling);

// createElement
const div = document.createElement("div")
div.innerText = "A new div"
const span = document.createElement("span")
span.innerText = "A new span"
// append prepend
const body2 = document.querySelector("body")
body2.append(div)
const body3 = document.querySelector("body")
body3.prepend(span)

const ul = document.createElement("ul")
ul.innerText = "A new ul"
// insertBefore
const body4 = document.querySelector("body")
const h1 = document.querySelector("h1")
body4.insertBefore(ul, h1)

const strong = document.createElement("strong")
strong.innerText = "A new strong text"
// "insertAfter"
const body5 = document.querySelector("body")
const header2 = document.querySelector("header")
body4.insertBefore(strong, header2.nextSibling)