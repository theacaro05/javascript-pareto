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


// TODO 1: Season-from-month (if / else if / else).
//         Given each month variable below, use an if-chain to ASSIGN the season string.
//
//           12, 1, 2  → "winter"
//           3, 4, 5   → "spring"
//           6, 7, 8   → "summer"
//           9, 10, 11 → "autumn"
//           anything else → "invalid"

const month1 = 1;   // expected "winter"
const month2 = 4;   // expected "spring"
const month3 = 7;   // expected "summer"
const month4 = 10;  // expected "autumn"
const month5 = 99;  // expected "invalid"

let season1, season2, season3, season4, season5;
// (Use 5 if-chains — one per month. Or write the same chain 5 times with each month.)

// johnson's solution
season1 = getSeason(month1);
season2 = getSeason(month2);
season3 = getSeason(month3);
season4 = getSeason(month4);
season5 = getSeason(month5);
console.log(season1, season2, season3, season4, season5);

function getSeason(monthNumber) {
  const winterMonths = [12, 1, 2];
  const springMonths = [3, 4, 5];
  const summerMonths = [6, 7, 8];
  const autumnMonths = [9, 10, 11];
  const season =
      winterMonths.includes(monthNumber) ? "winter":
      springMonths.includes(monthNumber) ? "spring":
      summerMonths.includes(monthNumber) ? "summer":
      autumnMonths.includes(monthNumber) ? "autumn": "invalid";
  return season;
}


// TODO 2: Same logic as #1 but with a SINGLE nested ternary.
//         Assign the result to `season1Ternary` (for month1 = 1).

let season1Ternary = getSeason(month1);


// TODO 3: BMI category.
//         Compute bmi = weight / (height * height).
//         Then assign bmiCategory to one of: "underweight", "normal", "overweight", "obese".
//
//           bmi < 18.5  → "underweight"
//           bmi < 25    → "normal"
//           bmi < 30    → "overweight"
//           otherwise   → "obese"

const weight = 72;     // kg
const height = 1.78;   // m
let bmi;
let bmiCategory;
// johnson's solution
const bmiCalculator = (weight, height) => weight / (height * height);
const bmiCategoryClassifier = (bmi) => {
  const category = 
    bmi < 18.5 ? "underweight":
    bmi < 25 ? "normal":
    bmi < 30 ? "overweight": "obese";
  return category;
}
bmi = bmiCalculator(weight, height);
bmiCategory = bmiCategoryClassifier(bmi);
console.log(bmi, bmiCategory);




// TODO 4: FizzBuzz — single number.
//         Given each n below, ASSIGN the result to fb<n>:
//           "FizzBuzz" if divisible by 3 AND 5
//           "Fizz"     if only by 3
//           "Buzz"     if only by 5
//           the number otherwise

let fb15;    // expected "FizzBuzz"
let fb9;     // expected "Fizz"
let fb10;    // expected "Buzz"
let fb7;     // expected 7

// johnson's solution
const fizzBuzzCalculator = (number) => {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } 
  return number;
}

fb15 = fizzBuzzCalculator(15);
fb9 = fizzBuzzCalculator(9);
fb10 = fizzBuzzCalculator(10);
fb7 = fizzBuzzCalculator(7);
console.log(fb15, fb9, fb10, fb7)

// TODO 5: Auth gate (priority cascade).
//         Given the variables below, ASSIGN exactly ONE message in this priority order:
//           !loggedIn   → "please log in"
//           banned      → "you are banned"
//           !verified   → "please verify your email"
//           otherwise   → "welcome, " + name

let message1, message2, message3, message4;

const checkAuth = (name, loggedIn, banned, verified) => {
  if (!loggedIn) {
    return "please log in";
  } else if (banned) {
    return "you are banned";
  } else if (!verified) {
    return "please verify your email";
  }
  return "welcome, " + name;
}

// Case A:
{
  const loggedIn = false; const verified = true;  const banned = false; const name = "Jane";
  message1 = checkAuth(name, loggedIn, banned, verified)               // expected "please log in"
}
// Case B:
{
  const loggedIn = true;  const verified = true;  const banned = true;  const name = "Eve";
  message2 = checkAuth(name, loggedIn, banned, verified)               // expected "you are banned"
}
// Case C:
{
  const loggedIn = true;  const verified = false; const banned = false; const name = "Lin";
  message3 = checkAuth(name, loggedIn, banned, verified)                   // expected "please verify your email"
}
// Case D:
{
  const loggedIn = true;  const verified = true;  const banned = false; const name = "Jane";
  message4 = checkAuth(name, loggedIn, banned, verified)                 // expected "welcome, Jane"
}


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: season from month (if/else)", () => {
  ok("month 1",  season1, "winter");
  ok("month 4",  season2, "spring");
  ok("month 7",  season3, "summer");
  ok("month 10", season4, "autumn");
  ok("month 99", season5, "invalid");
});

section("TODO 2: season via nested ternary", () => {
  ok("month 1 (ternary)", season1Ternary, "winter");
});

section("TODO 3: BMI", () => {
  ok("bmi computed", Math.round(bmi * 100) / 100, 22.72);
  ok("bmiCategory",  bmiCategory, "normal");
});

section("TODO 4: FizzBuzz single-number", () => {
  ok("n=15", fb15, "FizzBuzz");
  ok("n=9",  fb9,  "Fizz");
  ok("n=10", fb10, "Buzz");
  ok("n=7",  fb7,  7);
});

section("TODO 5: auth gate", () => {
  ok("not logged in", message1, "please log in");
  ok("banned",        message2, "you are banned");
  ok("not verified",  message3, "please verify your email");
  ok("welcome",       message4, "welcome, Jane");
});
