// Run with:  node 2-examples.js

// Classic function declaration
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Jane"));

// Same thing as an arrow function (with explicit return)
const greetArrow = (name) => {
  return "Hello, " + name;
};
console.log(greetArrow("Jane"));

// Single-expression arrow — implicit return, no braces
const greetShort = (name) => "Hello, " + name;
console.log(greetShort("Jane"));

// Multiple parameters
const add = (a, b) => a + b;
console.log("2 + 3 =", add(2, 3));

// No parameters
const sayHi = () => "Hi!";
console.log(sayHi());

// Default parameter values
const greetWithDefault = (name = "stranger") => "Hello, " + name;
console.log(greetWithDefault());
console.log(greetWithDefault("Jane"));

// Functions are values — you can pass them around.
const double = (n) => n * 2;
const apply = (fn, value) => fn(value);
console.log("double(5) via apply:", apply(double, 5));

// In React, components are just functions:
// const Greeting = (props) => `<h1>Hello, ${props.name}</h1>`;
// (We'll see this in module 14.)
const Greeting = (props) => `Hello, ${props.name}`;
console.log(Greeting({ name: "Jane" }));
