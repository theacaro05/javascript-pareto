// Run with:  node 2-examples.js

const colors = ["red", "green", "blue"];

console.log(colors);
console.log("first:", colors[0]);
console.log("second:", colors[1]);
console.log("length:", colors.length);
console.log("last:", colors[colors.length - 1]);

// Accessing an index that doesn't exist returns undefined (no error).
console.log("colors[99]:", colors[99]);

// Adding/removing from the end
const items = ["a", "b"];
items.push("c");
console.log("after push:", items);  // ["a", "b", "c"]
items.pop();
console.log("after pop:", items);   // ["a", "b"]

// Adding/removing from the start
items.unshift("z");
console.log("after unshift:", items); // ["z", "a", "b"]
items.shift();
console.log("after shift:", items);   // ["a", "b"]

// includes — quick membership check
console.log([1, 2, 3].includes(2));   // true
console.log([1, 2, 3].includes(99));  // false

// Arrays can hold any types (even mixed).
const mixed = [1, "two", true, null];
console.log(mixed);
