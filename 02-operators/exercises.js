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


// TODO 1: Predict each comparison, then ASSIGN the boolean result.

let r1;   // 3 === 3                  prediction: true
let r2;   // 3 === "3"                prediction: false
let r3;   // 3 == "3"                 prediction: true
let r4;   // 0 == false               prediction: true
let r5;   // 0 == ""                  prediction: true
let r6;   // null == undefined        prediction: true
let r7;   // null === undefined       prediction: false
let r8;   // NaN === NaN              prediction: false  ← surprise

r1 = 3 === 3;
r2 = 3 === "3";
r3 = 3 == "3";
r4 = 0 == false;
r5 = 0 == "";
r6 = null == undefined;
r7 = null === undefined;
r8 = NaN === NaN;
console.log(r1,r2, r3, r4, r5, r6, r7, r8)


// TODO 2: Authorization gate.
//         Compute `canPost` = logged in AND verified AND NOT banned.

const loggedIn = true;
const verified = true;
const banned   = false;
let canPost = loggedIn && verified && !banned;
console.log(canPost);


// TODO 3: ?? trap — preserve real falsy values.
//         For each, assign the result of `value ?? defaultValue` to the result variable.

const volume     = 0;           // default 50
const brightness = null;        // default 50
const retries    = undefined;   // default 3
const label      = "";          // default "untitled"

let volumeOrDefault = volume ?? 50; // 0
let brightnessOrDefault = brightness ?? 50; // 50
let retriesOrDefault = retries ?? 3; // 3
let labelOrDefault = label ?? "untitled"; // ""
console.log(volumeOrDefault, brightnessOrDefault, retriesOrDefault, labelOrDefault)


// TODO 4: Operator precedence puzzle (NO extra parentheses).
//         Write ONE expression — using only x, &&, ||, ===, <, >, and number literals,
//         NO parens — that is true ONLY when:
//             x is positive AND (x is less than 10 OR x is greater than 100).
//         Hint: && binds tighter than ||.
//         Assign the expression result to `precedence5`, `precedence50`, etc.
//         (We test 4 values; copy the expression each time with a different x.)

let precedence5;     // x = 5    → expected true
let precedence50;    // x = 50   → expected false
let precedence150;   // x = 150  → expected true
let precedenceNeg;   // x = -1   → expected false

precedence5   = 5  > 0 && 5  < 10 || 5  > 100;
precedence50  = 50 > 0 && 50 < 10 || 50 > 100;
precedence150 = 150 > 0 && 150 < 10 || 150 > 100;
precedenceNeg = -1 > 0 && -1 < 10 || -1 > 100;


// TODO 5: Short-circuit RETURN-VALUE puzzle.
//         Predict the actual VALUE each expression evaluates to, and assign it.

let sc1;   // ""       || 0 || NaN || "found"
let sc2;   // "yes"    && "no"
let sc3;   // null     && "anything"
let sc4;   // "first"  ?? "second"
let sc5;   // null     ?? undefined ?? "finally"
let sc6;   // false    || 0 || null || undefined || "last"


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: comparison predictions", () => {
  ok("3 === 3",            r1, true);
  ok("3 === '3'",          r2, false);
  ok("3 == '3'",           r3, true);
  ok("0 == false",         r4, true);
  ok("0 == ''",            r5, true);
  ok("null == undefined",  r6, true);
  ok("null === undefined", r7, false);
  ok("NaN === NaN",        r8, false);
});

section("TODO 2: auth gate", () => {
  ok("canPost", canPost, true);
});

section("TODO 3: ?? defaults", () => {
  ok("volume (0 preserved)",     volumeOrDefault, 0);
  ok("brightness (null → 50)",   brightnessOrDefault, 50);
  ok("retries (undefined → 3)",  retriesOrDefault, 3);
  ok("label ('' preserved)",     labelOrDefault, "");
});

section("TODO 4: precedence puzzle", () => {
  ok("x=5",   precedence5,   true);
  ok("x=50",  precedence50,  false);
  ok("x=150", precedence150, true);
  ok("x=-1",  precedenceNeg, false);
});

section("TODO 5: short-circuit values", () => {
  ok("'' || 0 || NaN || 'found'",            sc1, "found");
  ok("'yes' && 'no'",                         sc2, "no");
  ok("null && 'anything'",                    sc3, null);
  ok("'first' ?? 'second'",                   sc4, "first");
  ok("null ?? undefined ?? 'finally'",        sc5, "finally");
  ok("false || 0 || null || undef || 'last'", sc6, "last");
});
