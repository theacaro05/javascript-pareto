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


// TODO 1: Build `tableOf7` — an ARRAY of strings, one per multiple of 7 from 1×7 to 10×7:
//         "7 × 1 = 7", "7 × 2 = 14", ..., "7 × 10 = 70"

let tableOf7 = [];
for (let i = 1; i <= 10; i++) {
  const str = "7 × " + i + " = " + 7 * i;
  tableOf7.push(str);
}


// TODO 2: Sum and average — loop over `numbers`. ASSIGN both.
const numbers = [10, 25, 8, 47, 12, 33, 19];
let sum = 0, average = 0;
for (const number of numbers) {
  sum += number;
}

average = sum / numbers.length;


// TODO 3: Tallest. ASSIGN `tallest` to the largest value in `heights`.
//         Use a loop — no Math.max.
const heights = [165, 178, 152, 184, 171];
let tallest = heights[0];
for (const height of heights) {
  if (height > tallest) {
    tallest = height
  }
}


// TODO 4: Longest word. ASSIGN `longest` to the word with the most characters.
const words = ["pareto", "javascript", "react", "node", "destructuring"];
let longest = words[0];
for (const word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}


// TODO 5: FizzBuzz 1..30.
//         Build `fizzbuzz` — an ARRAY of 30 entries, each entry being one of:
//           "FizzBuzz", "Fizz", "Buzz", or the number itself.
//         (So fizzbuzz[0] is for n=1, fizzbuzz[14] is for n=15 → "FizzBuzz".)
let fizzbuzz = [];
for (let i = 1; i <=30 ; i++ ) {
  if (i % 3 == 0 && i % 5 == 0) {
    fizzbuzz.push("FizzBuzz");
  } else if (i % 3 == 0 ) {
    fizzbuzz.push("Fizz");
  } else if ( i % 5 == 0) {
    fizzbuzz.push("Buzz");
  } else {
    fizzbuzz.push(i);
  }
  
}

// TODO 6: Multiplication grid 1..5.
//         Build `grid` — an ARRAY OF ARRAYS, 5 rows × 5 columns,
//         where grid[r-1][c-1] = r * c.
//         Expected:
//           grid[0] = [1, 2, 3, 4, 5]
//           grid[1] = [2, 4, 6, 8, 10]
//           grid[4] = [5, 10, 15, 20, 25]
let grid = [];
// for (let i = 0 ; i < 5; i++) {
//   grid.push([]);
//   for (let j = 0; j < 5; j++) {
//     grid[i][j] = (i + 1) * (j+1);
//   }
// }

for (let i = 1 ; i <= 5; i++) {
  let row = [];
  for (let j = 1; j <= 5; j++) {
    row.push(i * j) ;
  }
  grid.push(row);
}



// TODO 7: Filter-and-square.
//         Build `evensSquared` — squares of every EVEN number in `source`.
//         Use for...of with `continue` to skip odds.
const source = [1, 2, 3, 4, 5, 6, 7, 8];

let evensSquared = [];
for ( const el of source) {
  if (el % 2 == 0) {
    evensSquared.push(el * el)
  }
}
// Expected: [4, 16, 36, 64]


// TODO 8: Linear search — write `indexOf(arr, target)` returning the first index
//         of target in arr, or -1 if not found. Use a for loop.

const indexOf = (arr, target) => {
  for (let i = 0; i< arr.length; i++) {
      if (target === arr[i]) {
        return i;
      } 
  }
  return -1;
}




// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: 7× table", () => {
  ok("length 10",  tableOf7.length, 10);
  ok("first",      tableOf7[0],     "7 × 1 = 7");
  ok("at index 6", tableOf7[6],     "7 × 7 = 49");
  ok("last",       tableOf7[9],     "7 × 10 = 70");
});

section("TODO 2: sum and average", () => {
  ok("sum",     sum,     154);
  ok("average", average, 22);
});

section("TODO 3: tallest", () => {
  ok("tallest", tallest, 184);
});

section("TODO 4: longest word", () => {
  ok("longest", longest, "destructuring");
});

section("TODO 5: FizzBuzz 1..30", () => {
  ok("length 30",   fizzbuzz.length, 30);
  ok("fb[0] (n=1)", fizzbuzz[0],     1);
  ok("fb[2] (n=3)", fizzbuzz[2],     "Fizz");
  ok("fb[4] (n=5)", fizzbuzz[4],     "Buzz");
  ok("fb[14] (n=15)", fizzbuzz[14],  "FizzBuzz");
  ok("fb[29] (n=30)", fizzbuzz[29],  "FizzBuzz");
});

section("TODO 6: multiplication grid", () => {
  ok("grid length 5",  grid.length,    5);
  ok("grid[0] row 1",  grid[0],        [1, 2, 3, 4, 5]);
  ok("grid[1] row 2",  grid[1],        [2, 4, 6, 8, 10]);
  ok("grid[4] row 5",  grid[4],        [5, 10, 15, 20, 25]);
});

section("TODO 7: evens squared", () => {
  ok("evensSquared", evensSquared, [4, 16, 36, 64]);
});

section("TODO 8: indexOf", () => {
  ok("found",     indexOf(["a", "b", "c", "d"], "c"), 2);
  ok("not found", indexOf(["a", "b", "c"], "z"),     -1);
  ok("first",     indexOf(["x", "y", "z"], "x"),      0);
  ok("first match wins", indexOf(["a", "b", "a", "b"], "b"), 1);
});
