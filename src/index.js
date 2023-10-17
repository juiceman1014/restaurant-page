import printMe from "./print.js";
console.log("hello");


const element = document.createElement("div");
const btn = document.createElement("button");

btn.innerHTML = "Click me";
btn.onclick = printMe;

element.appendChild(btn);



document.body.appendChild(element);
