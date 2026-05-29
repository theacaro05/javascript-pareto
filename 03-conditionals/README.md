# 03 — Conditionals

Conditionals run different code depending on whether something is `true` or `false`.

## `if` / `else if` / `else`

```js
const age = 20;

if (age >= 18) {
  console.log("adult");
} else if (age >= 13) {
  console.log("teen");
} else {
  console.log("kid");
}
```

The expression inside `(...)` must evaluate to `true` or `false` (or something *truthy* / *falsy* — see module 08).

## The ternary operator — `condition ? a : b`

Reads as: "if condition is true, give me `a`; otherwise, give me `b`."

```js
const age = 20;
const label = age >= 18 ? "adult" : "minor";
console.log(label);   // "adult"
```

Ternaries are **expressions** — they return a value. This is the big difference vs `if`, which is a statement and returns nothing.

You can use ternaries anywhere a value is expected:

```js
console.log(score > 50 ? "pass" : "fail");
```

You can even nest them (sparingly):

```js
const grade =
  score >= 90 ? "A" :
  score >= 70 ? "B" :
  score >= 50 ? "C" : "F";
```

## Short-circuit with `&&`

A common shorthand for "if X, do Y":

```js
isLoggedIn && console.log("welcome back!");
```

If `isLoggedIn` is truthy, the right side runs. If not, it does nothing.

## `switch` — exists, rarely needed for React

You'll occasionally see `switch`, but in React you'll mostly use objects-as-lookups or ternaries instead. We'll skip it. If you ever need it: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch>.

## React relevance

This is the biggest topic so far for React. JSX (React's HTML-like syntax) doesn't allow `if` statements *inside* its `{ }` braces — only expressions. So conditional rendering uses:

- **ternaries**: `{isLoggedIn ? <Profile /> : <LoginButton />}`
- **`&&` short-circuit**: `{hasUnread && <Badge />}`

You will type both of these every single day in React.

## Exercises

See `3-exercises.js`.
