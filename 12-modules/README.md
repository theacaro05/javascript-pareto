# 12 — Modules (import / export)

Modules let you split code across multiple files and share things between them. Every React file is a module.

## The rules

1. To share something out of a file → use `export`.
2. To pull it into another file → use `import`.

This playground's root `package.json` sets `"type": "module"`, so Node treats every `.js` file here as an ES module. (In React projects, the build tool — Vite, Next.js, etc. — does the same.)

## Named exports

Export individual things by name:

```js
// math.js
export const PI = 3.14;
export const square = (n) => n * n;
```

```js
// main.js
import { PI, square } from "./math.js";

console.log(PI);          // 3.14
console.log(square(4));   // 16
```

Notes:
- Use `{ ... }` and the **exact** exported names.
- The path is **relative** (`./math.js`). The `./` matters.
- In Node, include the `.js` extension. (In React with Vite/Next, you can usually omit it.)

You can rename on import:

```js
import { square as sq } from "./math.js";
sq(5);   // 25
```

## Default export

Every file can have **one** default export. It doesn't need a name when imported.

```js
// greeter.js
const greet = (name) => `Hello, ${name}`;
export default greet;
```

```js
// main.js
import greet from "./greeter.js";
// no braces, and you can call it whatever you want:
import hello from "./greeter.js";

console.log(greet("Jane"));
console.log(hello("Jane"));
```

In React, components are usually default exports:

```js
// Greeting.jsx
const Greeting = ({ name }) => <h1>Hello, {name}</h1>;
export default Greeting;
```

```js
// App.jsx
import Greeting from "./Greeting.jsx";
```

## Mixing them

A file can have both:

```js
// utils.js
export const PI = 3.14;
export const square = (n) => n * n;

const main = () => "I am the main thing";
export default main;
```

```js
// main.js
import main, { PI, square } from "./utils.js";
```

The default goes first (no braces), named imports go in `{ ... }`.

## React relevance

Every file you write in React begins with `import`s and ends with an `export default` (or a named export). You'll see hundreds of these:

```js
import { useState, useEffect } from "react";
import Greeting from "./Greeting.jsx";

export default function App() { ... }
```

## This module's files

- `math.js` — has named exports.
- `greeter.js` — has a default export.
- `2-examples.js` — imports from both and runs them.
- `exercises-helpers.js` — a starter file for you to fill in (then `3-exercises.js` imports from it).
- `3-exercises.js` — your TODOs + inline tests.
- One of the exercises asks you to create a brand-new file (`math-extras.js`) from scratch.

## Exercises

See `3-exercises.js`.
