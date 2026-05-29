# 00 — Setup

Before anything else: make sure you can run a JavaScript file.

## 1. Check Node is installed

In your terminal:

```sh
node --version
```

You should see something like `v18.x.x` or newer. If you see "command not found", install Node from <https://nodejs.org> (pick the LTS version).

## 2. Run your first file

Open this folder in your terminal:

```sh
cd 00-setup
node 2-examples.js
```

You should see some text print out. That's a JavaScript file running.

## 3. The tools you'll use constantly

### `console.log(...)`

This is how you "see" what's happening in your code. Whatever you pass to it gets printed to your terminal.

```js
console.log("hello");          // prints: hello
console.log(2 + 2);            // prints: 4
console.log("answer:", 42);    // prints: answer: 42
```

In React you'll use `console.log` constantly while debugging — same syntax, except the output shows up in your browser's DevTools console instead of the terminal.

### Comments

Lines starting with `//` are notes for humans — JavaScript ignores them.

```js
// This is a single-line comment.

/*
   This is a
   multi-line comment.
*/
```

### Statements end with `;` (optional but recommended)

```js
console.log("first");
console.log("second");
```

JavaScript will usually figure it out without the `;`, but include them as you learn — it removes ambiguity.

## React relevance

Everything in React is built on these three basics: writing JS in files, running them, and using `console.log` to inspect what's happening. You'll do all three thousands of times.

## Exercises

See `3-exercises.js`. Open it, follow the `// TODO:` notes, then run it with `node 3-exercises.js`.
