// Run with:  node 2-examples.js

// Classic if / else if / else
const age = 20;

if (age >= 18) {
  console.log("adult");
} else if (age >= 13) {
  console.log("teen");
} else {
  console.log("kid");
}

// Ternary — same logic, as an expression that returns a value
const label = age >= 18 ? "adult" : "minor";
console.log("label:", label);

// You can drop a ternary directly into console.log
const score = 72;
console.log(score > 50 ? "pass" : "fail");

// Nested ternary for grade buckets
const grade =
  score >= 90 ? "A" :
  score >= 70 ? "B" :
  score >= 50 ? "C" : "F";
console.log("grade:", grade);

// Short-circuit: "if isReady, then print"
const isReady = true;
isReady && console.log("we're ready!");

// In React you'd write this same pattern inside JSX:
// { isLoggedIn ? <Profile /> : <LoginButton /> }
// { hasUnread && <Badge /> }
