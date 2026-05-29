// Run with:  node 3-exercises.js


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


// TODO 1: `clamp(n, min, max)` returns n constrained between min and max.
//         clamp(5, 0, 10)   →  5
//         clamp(-3, 0, 10)  →  0
//         clamp(15, 0, 10)  →  10

const clamp = (n, min, max) => {
  if (n >= min && n <= max) return n;
  if (n < min) return min;
  if (n > max) return max;
}


// TODO 2: `between(min, max)` returns ANOTHER function that takes a number
//         and returns true if it's between min and max (inclusive).
//         Example:
//             const teen = between(13, 19);
//             teen(15) → true
//             teen(20) → false

const between = (min, max) => (age) => age >= min && age <= max;
const teen = between(13, 19);
const kid = between(3,13);
console.log(between)
console.log(teen(15));
console.log(kid(28));

// TODO 3: `compose(f, g)` returns a function that applies g first, then f.
//         (i.e. (x) => f(g(x)))
//         Example:
//             const shout = (s) => s + "!";
//             const upper = (s) => s.toUpperCase();
//             const shoutyUpper = compose(shout, upper);
//             shoutyUpper("hi") → "HI!"

const shout = (str) => str + "!"; // f
const upper = (str) => str.toUpperCase(); // g
const compose = (shout, upper) => (str) => shout(upper(str));


// TODO 4: `negate(predicate)` returns a NEW function that returns the OPPOSITE
//         boolean of predicate.
//         Example:
//             const isEven = (n) => n % 2 === 0; //par
//             const isOdd  = negate(isEven); //impar
//             isOdd(3) → true,  isOdd(4) → false
const isEven = (n) => n % 2 === 0; //par
const negate = (fn) => (n) => !fn(n);
const isOdd = negate(isEven);

console.log(isOdd(5))

// TODO 5: `applyThrice(fn, x)` returns fn(fn(fn(x))).

const applyThrice = (fn, x) => fn(fn(fn(x)));


// TODO 6: `makeGreeter(greeting)` returns a function that takes a name and returns
//         greeting + ", " + name + "!"   (use + concatenation — template literals come in mod 10)

const makeGreeter = (greeting) => name => greeting + ", " + name + "!" ;
const helloGreeter = makeGreeter("hello!");
console.log(typeof helloGreeter)
console.log(helloGreeter("johnson"))


// TODO 7 (capstone): Use your compose to build:
//             pipeline = compose(square, compose(addTen, dbl))
//         where:
//             const dbl    = (n) => n * 2;
//             const addTen = (n) => n + 10;
//             const square = (n) => n * n;
//         Trace pipeline(3):  dbl(3)=6, addTen(6)=16, square(16)=256.

const dbl    = (n) => n * 2
const addTen = (n) => n + 10;
const square = (n) => n * n;
const pipeline = compose(square, compose(addTen, dbl))


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: clamp", () => {
  ok("middle",    clamp(5, 0, 10), 5);
  ok("below min", clamp(-3, 0, 10), 0);
  ok("above max", clamp(15, 0, 10), 10);
  ok("at min",    clamp(0, 0, 10), 0);
  ok("at max",    clamp(10, 0, 10), 10);
});

section("TODO 2: between", () => {
  const teen = between(13, 19);
  const adult = between(18, 64);
  ok("teen(15)", teen(15), true);
  ok("teen(20)", teen(20), false);
  ok("teen(13) at boundary", teen(13), true);
  ok("teen(19) at boundary", teen(19), true);
  ok("adult(30)", adult(30), true);
  ok("adult(70)", adult(70), false);
});

section("TODO 3: compose", () => {
  const shout = (s) => s + "!";
  const upper = (s) => s.toUpperCase();
  const shoutyUpper = compose(shout, upper);
  ok("shoutyUpper('hello')", shoutyUpper("hello"), "HELLO!");
});

section("TODO 4: negate", () => {
  const isEven = (n) => n % 2 === 0;
  const isOdd = negate(isEven);
  ok("isOdd(3)", isOdd(3), true);
  ok("isOdd(4)", isOdd(4), false);
  ok("isOdd(0)", isOdd(0), false);
});

section("TODO 5: applyThrice", () => {
  ok("applyThrice(+1, 10)", applyThrice((n) => n + 1, 10), 13);
  ok("applyThrice(*2, 1)",  applyThrice((n) => n * 2, 1), 8);
});

section("TODO 6: makeGreeter", () => {
  const hello = makeGreeter("Hello");
  const hi    = makeGreeter("Hi");
  ok("hello('Jane')",   hello("Jane"),   "Hello, Jane!");
  ok("hi('Grace')",    hi("Grace"),    "Hi, Grace!");
});

section("TODO 7: pipeline capstone", () => {
  ok("pipeline(3)", pipeline(3), 256);
  ok("pipeline(2)", pipeline(2), 196);   // dbl(2)=4, addTen(4)=14, square(14)=196
});
