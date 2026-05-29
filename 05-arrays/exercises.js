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


// TODO 1: Swap first and last items of `colors` (by index, using a temp variable).
//         After your code, colors should be ["yellow", "green", "blue", "red"].

const colors = ["red", "green", "blue", "yellow"];
const firstElement = colors.shift();
const lastElement = colors.pop();
colors.unshift(lastElement);
colors.push(firstElement);

// TODO 2: ASSIGN `middle` to the middle item of `odd` — computed from length,
//         NOT hardcoded as [3].

const odd = ["a", "b", "c", "d", "e", "f", "g"];
const middleIndex = Math.floor(odd.length / 2);
let middle = odd[middleIndex];


// TODO 3: Queue simulation. Build `queue` starting empty, push A, B, C, then SHIFT once.
//         After your code:
//           queueFinal should be ["B", "C"]
//           queueRemoved should be "A"

const queue = [];
queue.push("A");
queue.push("B");
queue.push("C");
let queueRemoved = queue.shift();
let queueFinal = queue;


// TODO 4: Stack simulation. Build `stack` starting empty, push A, B, C, then POP once.
//         After your code:
//           stackFinal should be ["A", "B"]
//           stackRemoved should be "C"

const stack = [];
stack.push("A");
stack.push("B");
stack.push("C");
let stackRemoved = stack.pop();
let stackFinal = stack;


// TODO 5: Manual reverse (no .reverse, no loops — length 5 means 5 push calls).
//         Build `flipped` from `original` in reverse order.

const original = [10, 20, 30, 40, 50];
const flipped = [];
flipped.push(original[4]);
flipped.push(original[3]);
flipped.push(original[2]);
flipped.push(original[1]);
flipped.push(original[0]);



// TODO 6: Forbidden-item check.
//         ASSIGN `clean` = true if NONE of `forbidden` appears in `fruits`, else false.
//         Use 3 .includes() calls (forbidden has length 3) combined with || and !.

const fruits    = ["apple", "banana", "cherry", "fig"];

const checkForbidden = (el) => ["mango", "kiwi", "fig"].includes(el);

let clean = checkForbidden(fruits[0]) && checkForbidden(fruits[1]) && checkForbidden(fruits[2]) && checkForbidden(fruits[3]);

// TODO 7: `lastTwo(arr)` — function that returns a NEW array of the last two items.
//             lastTwo([10, 20, 30, 40, 50])  →  [40, 50]
//             lastTwo(["a", "b", "c"])       →  ["b", "c"]

// const lastTwo = (arr) => {
//   const aux = [];
//   const lastItem = arr.pop();
//   const secondToLastItem = arr.pop();
//   aux.push(secondToLastItem);
//   aux.push(lastItem);
//   return aux;
// }
const lastTwo = (arr) => arr.slice(-2)
const arr1 = lastTwo([10, 20, 30, 40, 50]) 
arr1;
const arr2 = lastTwo(["a", "b", "c"]) 
arr2


// TODO 8: `rotateRight(arr)` — return a NEW length-4 array where the LAST item moves
//         to the front.  Do not mutate arr.
//             rotateRight([1, 2, 3, 4])  →  [4, 1, 2, 3]

// const rotateRight = (arr) => {
//   const result = [];
//   result.push(arr[3]);
//   result.push(arr[0]);
//   result.push(arr[1]);
//   result.push(arr[2]);

//   return result;
// }

const rotateRight = arr => [arr[arr.length - 1], ...arr.slice(0, -1)];
const result = rotateRight([1, 2, 3, 4]);
result.sli
result;



// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: swap first and last", () => {
  ok("colors after swap", colors, ["yellow", "green", "blue", "red"]);
});

section("TODO 2: middle item", () => {
  ok("middle of odd", middle, "d");
});

section("TODO 3: queue", () => {
  ok("queueRemoved", queueRemoved, "A");
  ok("queueFinal",   queueFinal,   ["B", "C"]);
});

section("TODO 4: stack", () => {
  ok("stackRemoved", stackRemoved, "C");
  ok("stackFinal",   stackFinal,   ["A", "B"]);
});

section("TODO 5: manual reverse", () => {
  ok("flipped", flipped, [50, 40, 30, 20, 10]);
});

section("TODO 6: forbidden check", () => {
  ok("clean", clean, false);
});

section("TODO 7: lastTwo", () => {
  ok("lastTwo([10,20,30,40,50])", lastTwo([10, 20, 30, 40, 50]), [40, 50]);
  ok("lastTwo(['a','b','c'])",    lastTwo(["a", "b", "c"]),       ["b", "c"]);
});

section("TODO 8: rotateRight", () => {
  ok("rotateRight([1,2,3,4])", rotateRight([1, 2, 3, 4]), [4, 1, 2, 3]);
  ok("rotateRight unchanged input", (() => {
    const input = [1, 2, 3, 4];
    rotateRight(input);
    return input;
  })(), [1, 2, 3, 4]);
});
