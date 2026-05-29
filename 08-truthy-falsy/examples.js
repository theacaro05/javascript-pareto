// Run with:  node 2-examples.js

// Boolean() turns any value into true/false based on truthy/falsy rules.
console.log("--- the falsy values ---");
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log("--- everything else is truthy ---");
console.log(Boolean("hello"));    // true
console.log(Boolean("false"));    // true   (non-empty string!)
console.log(Boolean("0"));        // true   (non-empty string!)
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean([]));         // true   (empty array — truthy)
console.log(Boolean({}));         // true   (empty object — truthy)

// Using truthy/falsy in an if
const name = "Jane";
if (name) console.log("we have a name");

const empty = "";
if (!empty) console.log("name is empty");

// The && gotcha — what really comes out of && ?
console.log("--- && returns one of its operands, not just true/false ---");
console.log(0 && "anything");        // 0   ← this is the React gotcha!
console.log("a" && "b");             // "b"
console.log("" && "b");              // ""
console.log(true && "rendered");     // "rendered"

// In React, { items.length && <List /> } can accidentally render 0.
// Fix: use a real boolean.
const items = [];
console.log(items.length > 0 && "render list");   // false  (safe)
console.log(items.length && "render list");       // 0      (oops)

// ?? vs || — defaults
console.log(0 || "fallback");        // "fallback"  (|| fires for 0)
console.log(0 ?? "fallback");        // 0           (?? does not)
