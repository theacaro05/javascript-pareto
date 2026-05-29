// Run with:  node 3-exercises.js
//
// Implement each TODO below. Tests at the bottom will tell you what passes
// and what doesn't. Don't worry about understanding the test helper — just
// scroll past it to the TODOs.


// ── Test helper (ignore — scroll down to the TODOs) ─────────────────
const ok = (label, actual, expected) => {
  const pass =
    Object.is(actual, expected) ||
    JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    pass
      ? "  ✓ " + label
      : "  ✗ " + label + " — got " + JSON.stringify(actual) +
        ", expected " + JSON.stringify(expected)
  );
};
const section = (name, fn) => {
  console.log("\n── " + name + " ──");
  try { fn(); } catch (e) { console.log("  ⚠ skipped (" + e.message + ")"); }
};
// ────────────────────────────────────────────────────────────────────


// TODO 1: Predict typeof, then assign each variable to the typeof of the value.
//         The placeholders are `let` so you can reassign them.
//         Example:  t_hello = typeof "hello";

let t_hello;        // your prediction (comment): string
let t_42;           // your prediction (comment): number
let t_true;         // your prediction (comment): boolean
let t_null;         // your prediction (comment): null         ← gotcha
let t_undefined;    // your prediction (comment): undefined
let t_NaN;          // your prediction (comment): number        ← another gotcha
let t_string5;      // your prediction (comment): typeof "5" string
let t_number5;      // your prediction (comment): typeof 5 number

// Write your reassignments below:
t_hello = typeof "hello";
t_42 = typeof 42;
t_true = typeof true;
t_null = typeof null;
t_undefined = typeof undefined;
t_NaN = typeof NaN;
t_string5 = typeof "5";
t_number5 = typeof 5;


// TODO 2: Const reassignment puzzle (NO test for this — observation only).
//         Declare:  const greeting = "hi";
//         UNCOMMENT each of the lines below one at a time, run, observe the error.
//         Re-comment when done. Different error messages = different rules.

const greeting = "hi";
// greeting = "bye";
// const greeting = "hey";

console.log("greeting:", greeting);


// TODO 3: Same-type comparison.
//         Assign each variable to a boolean: true if both sides have the same type.

let sameAB = typeof "5" === typeof 5;   // "5" vs 5
let sameCD = typeof true === typeof 1;   // true vs 1
let sameEF = typeof null === typeof undefined// null vs undefined
let sameGH = typeof NaN === typeof 42;   // NaN vs 42

// sameAB = typeof "5" === typeof 5;
// ...


// TODO 4: Variable swap. Make `a` end up as "second" and `b` as "first".

let a = "first";
let b = "second";
let temp = a;
a = b;
b = temp;


// TODO 5: What is  typeof (typeof 42)  ?  Assign your answer.

let typeOfTypeof;
typeOfTypeof = typeof (typeof 42);
console.log(typeOfTypeof)


// ── TESTS (run automatically) ─────────────────────────────────────────

section("TODO 1: typeof predictions", () => {
  ok("typeof 'hello'", t_hello, "string");
  ok("typeof 42",      t_42, "number");
  ok("typeof true",    t_true, "boolean");
  ok("typeof null",    t_null, "object");
  ok("typeof undefined", t_undefined, "undefined");
  ok("typeof NaN",     t_NaN, "number");
  ok("typeof '5'",     t_string5, "string");
  ok("typeof 5",       t_number5, "number");
});

section("TODO 3: same-type comparisons", () => {
  ok("'5' vs 5",          sameAB, false);
  ok("true vs 1",         sameCD, false);
  ok("null vs undefined", sameEF, false);
  ok("NaN vs 42",         sameGH, true);
});

section("TODO 4: variable swap", () => {
  ok("a is now 'second'", a, "second");
  ok("b is now 'first'",  b, "first");
});

section("TODO 5: typeof of typeof", () => {
  ok("typeof (typeof 42)", typeOfTypeof, "string");
});
