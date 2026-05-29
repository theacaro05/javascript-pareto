# 11 — Array Methods

The methods in this module are how real React code processes lists. Master these four (especially `.map`) and you're 90% of the way there.

All of them **return a new array** without changing the original. That's a feature, not a bug — React relies on immutability.

Each takes a **function** as an argument (which is why module 04 set this up).

## `.map(fn)` — transform every item

Calls `fn` on each item, builds a new array from the results.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
// [2, 4, 6]
```

```js
const users = [
  { name: "Jane", age: 36 },
  { name: "Grace", age: 45 },
];

const names = users.map((u) => u.name);
// ["Jane", "Grace"]
```

**`.map()` is THE React iteration pattern.** Any time you render a list in JSX, you're calling `.map()`:

```jsx
{users.map((user) => <UserCard key={user.id} user={user} />)}
```

## `.filter(fn)` — keep only matching items

`fn` returns `true` to keep, `false` to drop.

```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((n) => n % 2 === 0);
// [2, 4]
```

```js
const users = [
  { name: "Jane", isActive: true },
  { name: "Grace", isActive: false },
  { name: "Linus", isActive: true },
];

const active = users.filter((u) => u.isActive);
// [{ name: "Jane", ... }, { name: "Linus", ... }]
```

## `.find(fn)` — get the first match (or `undefined`)

```js
const users = [
  { id: 1, name: "Jane" },
  { id: 2, name: "Grace" },
];

const grace = users.find((u) => u.id === 2);
// { id: 2, name: "Grace" }

const missing = users.find((u) => u.id === 99);
// undefined
```

## `.includes(value)` — quick membership check

(Already met in module 05.)

```js
[1, 2, 3].includes(2);   // true
```

## `.reduce(fn, initial)` — collapse to a single value (lightly)

The hardest of the bunch. You'll only need it occasionally.

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, n) => total + n, 0);
// 10
```

How it works:
- `total` starts at the `initial` value (`0`).
- For each `n`, the function returns the new `total`.
- After the last item, `reduce` returns the final `total`.

Don't worry if it feels weird at first — `.map` and `.filter` are far more important. Come back to `.reduce` when you need it.

## Chaining

These methods return arrays, so you can chain them:

```js
const result = users
  .filter((u) => u.isActive)
  .map((u) => u.name);
```

Reads top-to-bottom like a recipe.

## React relevance

- `.map()` → render a list of components.
- `.filter()` → derive a subset of state (e.g., "show only completed todos").
- `.find()` → look up the currently selected item.
- `.includes()` → "is this item already in the selection?"

If a React tutorial uses an array, it almost certainly uses one of these. **`.map()` is by far the most important.**

## Exercises

See `3-exercises.js`.
