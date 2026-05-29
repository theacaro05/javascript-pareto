# 07 — Loops

Loops repeat code.

In React you'll mostly iterate over arrays with `.map()` (module 11) — but the loop syntax below is useful background, and shows up in non-render code.

## `for` — classic counted loop

```js
for (let i = 0; i < 3; i++) {
  console.log("i is", i);
}
// i is 0
// i is 1
// i is 2
```

Three pieces inside `(...)`:

1. **start:** `let i = 0` — runs once before the loop.
2. **condition:** `i < 3` — checked before each iteration. If true, run the body.
3. **step:** `i++` — runs after each iteration. (`i++` is shorthand for `i = i + 1`.)

## `for...of` — loop over an array's values

The cleaner, more readable choice when you don't care about the index:

```js
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
// red
// green
// blue
```

Use `for...of` for arrays. It's the one you'll reach for 90% of the time.

## `while` — keep going until a condition is false

```js
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```

Useful when you don't know upfront how many iterations you need.

## Stopping early: `break`

```js
for (const n of [1, 2, 3, 4, 5]) {
  if (n === 3) break;
  console.log(n);
}
// 1
// 2
```

## Skipping one iteration: `continue`

```js
for (const n of [1, 2, 3, 4]) {
  if (n % 2 === 0) continue;
  console.log(n);
}
// 1
// 3
```

## React relevance

You'll rarely write `for` loops inside a React component — `.map()` is the idiomatic way to turn an array of data into an array of JSX elements. But `for...of` is handy in event handlers, utility functions, and anywhere you need to process a list before passing it to JSX.

## Exercises

See `3-exercises.js`.
