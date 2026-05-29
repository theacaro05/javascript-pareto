// Run with:  node 2-examples.js

const name = "Jane";
const count = 3;

// Basic interpolation
console.log(`Hello, ${name}!`);
console.log(`You have ${count} messages.`);

// Any expression goes inside ${ ... }
const a = 3, b = 4;
console.log(`${a} + ${b} = ${a + b}`);

// Ternary inside a template literal
const score = 70;
console.log(`Result: ${score >= 50 ? "pass" : "fail"}`);

// Calling a function inside ${ ... }
const upper = (s) => s.toUpperCase();
console.log(`Shout: ${upper("hello")}`);

// Multi-line — newlines in the source carry through to the string
const poem = `Roses are red
Violets are blue
JavaScript is weird
But so are you`;
console.log(poem);

// Building a className-like string (React pattern)
const isActive = true;
const className = `btn ${isActive ? "btn-active" : ""}`;
console.log(className);

// Building a URL (React/Next pattern)
const userId = 42;
console.log(`/users/${userId}/posts`);
