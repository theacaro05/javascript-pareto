// Run with:  node 2-examples.js

// Named imports — exact names, in braces.
import { PI, square, cube } from "./math.js";

console.log("PI:", PI);
console.log("square(4):", square(4));
console.log("cube(3):", cube(3));

// Default import — no braces, you can name it anything.
import greet from "./greeter.js";
console.log(greet("Jane"));

// Renaming a named import
import { square as sq } from "./math.js";
console.log("sq(5):", sq(5));

// You can mix default + named from the same file (not shown here —
// the next module organizes things a bit more cleanly).
