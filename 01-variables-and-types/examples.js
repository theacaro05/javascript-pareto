// Run with:  node 2-examples.js

// const — cannot be reassigned.
const name = "Jane";
console.log("name:", name);

// let — can be reassigned.
let score = 0;
score = 10;
score = score + 5;
console.log("score:", score);

// The five types you'll meet in React.
const aString = "hello";
const aNumber = 42;
const aBoolean = true;
const aNull = null;
let notSetYet;   // implicitly undefined

console.log(aString, aNumber, aBoolean, aNull, notSetYet);

// typeof tells you the type as a string.
console.log("typeof aString:", typeof aString);     // "string"
console.log("typeof aNumber:", typeof aNumber);     // "number"
console.log("typeof aBoolean:", typeof aBoolean);   // "boolean"
console.log("typeof notSetYet:", typeof notSetYet); // "undefined"
console.log("typeof aNull:", typeof aNull);         // "object" (quirk!)

// What happens if you try to reassign a const?
// const PI = 3.14;
// PI = 3.14159;  // ← uncomment this line, then run the file to see the error.
