// Run with:  node 2-examples.js

// Arithmetic
console.log(2 + 3, 10 - 4, 3 * 5, 10 / 4, 10 % 3);

// String concatenation with +
console.log("hello " + "world");
console.log("score: " + 42);

// === vs == — always prefer ===
console.log(3 === 3);     // true
console.log(3 === "3");   // false (different types)
console.log(3 == "3");    // true  (== converts types — avoid)

// Comparisons
console.log(5 > 3, 5 < 3, 5 >= 5, 5 <= 4, 5 !== 4);

// Logical AND, OR, NOT
console.log(true && false);   // false
console.log(true || false);   // true
console.log(!true);           // false

// Nullish coalescing — defaults only when null/undefined
const a = null ?? "default";       // "default"
const b = undefined ?? "default";  // "default"
const c = 0 ?? "default";          // 0    (0 is a real value)
const d = "" ?? "default";         // ""   ("" is a real value)
console.log(a, b, c, d);

// Compare to || which also defaults for falsy values like 0, ""
const e = 0 || "default";          // "default"  (different from ??)
const f = "" || "default";         // "default"
console.log(e, f);
