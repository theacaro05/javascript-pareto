// Run with:  node 2-examples.js

// Classic for loop
for (let i = 0; i < 3; i++) {
  console.log("i is", i);
}

// for...of — loop over an array's values
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// while — repeat until condition is false
let count = 0;
while (count < 3) {
  console.log("count:", count);
  count++;
}

// break — stop the loop early
for (const n of [1, 2, 3, 4, 5]) {
  if (n === 3) break;
  console.log("up to break:", n);
}

// continue — skip this iteration, keep looping
for (const n of [1, 2, 3, 4]) {
  if (n % 2 === 0) continue;
  console.log("odd only:", n);
}

// Building a new array via a loop (we'll learn .map() later for this)
const numbers = [1, 2, 3];
const doubled = [];
for (const n of numbers) {
  doubled.push(n * 2);
}
console.log("doubled:", doubled);   // [2, 4, 6]
