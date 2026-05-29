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
const section = async (name, fn) => {
  console.log("\n── " + name + " ──");
  try { await fn(); } catch (e) { console.log("  ⚠ skipped (" + e.message + ")"); }
};
// ────────────────────────────────────────────────────────────────────


// TODO 5: Open exercises-helpers.js and fill in TODOs 1-4 there first.
//
//         Then write these import lines at the TOP of THIS file
//         (above the test helper):
//
//             import welcome, { MAX_USERS, double, triple } from "./exercises-helpers.js";
//             import { double as times2 } from "./exercises-helpers.js";
//
//         If you get "does not provide an export named X", that export is
//         missing from exercises-helpers.js — go back and add it.


// TODO 8: Create a NEW file in this folder named  math-extras.js  with:
//             export const PI = 3.14159;
//             export function square(n) { return n * n; }
//             function area(radius) { return PI * square(radius); }
//             export default area;
//
//         Then add this import at the top of THIS file (with the others):
//             import area, { PI, square } from "./math-extras.js";


// ── TESTS (will skip until imports + helpers are in place) ───────────

await section("TODO 5: named imports from exercises-helpers", async () => {
  ok("MAX_USERS", MAX_USERS, 100);
  ok("double(7)", double(7), 14);
  ok("triple(7)", triple(7), 21);
});

await section("TODO 6: default import (welcome)", async () => {
  ok("welcome('Johnson')", welcome("Johnson"), "Welcome aboard, Johnson!");
});

await section("TODO 7: rename on import (times2)", async () => {
  ok("times2(50)", times2(50), 100);
});

await section("TODO 8: math-extras.js", async () => {
  ok("PI",        PI,        3.14159);
  ok("square(6)", square(6), 36);
  ok("area(5)",   area(5),   78.53975);
});
