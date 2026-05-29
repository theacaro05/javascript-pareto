# 08 — Truthy and Falsy

In JavaScript, **any value** can be used as if it were a boolean. When you put a non-boolean into an `if (...)`, ternary condition, or `&&` / `||` expression, JS converts it to `true` or `false` for that check.

## The falsy values

Memorize these — they're the **only** values that count as `false`:

```
false
0           // the number zero
-0
0n          // the bigint zero (you'll basically never see this)
""          // empty string
null
undefined
NaN         // "Not a Number"
```

**Everything else is truthy.** Including:

```js
"false"       // ← the string "false" is TRUTHY (non-empty string)
"0"           // ← the string "0" is TRUTHY too
[]            // empty array — truthy
{}            // empty object — truthy
-1            // any non-zero number — truthy
```

## What this enables

```js
const name = "Jane";

if (name) {
  console.log("we have a name");   // runs
}

const empty = "";
if (empty) {
  console.log("never runs");
}
```

Or with a ternary:

```js
const label = name ? "Hi " + name : "no name";
```

## Coercion

**Coercion** means forcing a value of one type to behave as another type.

- **Implicit coercion** — JS does it automatically. Example: `if (" ")` needs a boolean, so JS silently converts `" "` to `true` for you.
- **Explicit coercion** — you do it yourself. Example: `Boolean(" ")` returns `true`.

## Short-circuit operators

These operators don't just return `true`/`false` — they return one of the actual values.

### `||` — returns the first truthy value (or the last value if none are truthy)

```js
"a" || "b"          // "a"  ← truthy, stops here
""  || "b"          // "b"  ← "" is falsy, moves on; "b" is truthy
""  || 0 || "found" // "found"  ← skips falsy values until it finds a truthy one
""  || 0 || NaN     // NaN  ← all falsy, returns the last one
```

### `&&` — returns the first falsy value (or the last value if all are truthy)

```js
"a" && "b"          // "b"  ← "a" is truthy, moves on; "b" is last
null && "b"         // null ← null is falsy, stops immediately
"a" && "b" && "c"   // "c"  ← all truthy, returns the last one
```

Think of `&&` as: *"if the left side is falsy, return it and stop — no point checking the rest."*

### `??` — returns the first value that is NOT `null` or `undefined`

```js
null ?? "fallback"      // "fallback"
undefined ?? "fallback" // "fallback"
0    ?? "fallback"      // 0  ← 0 is not null/undefined, so it counts!
""   ?? "fallback"      // "" ← same, empty string is not null/undefined
```

Key difference from `||`: `??` only skips `null`/`undefined`. `||` skips anything falsy (including `0`, `""`, `NaN`).

## The `&&` rendering gotcha

In React, you'll write conditional rendering like:

```jsx
{ items.length && <List items={items} /> }
```

This looks fine, right? "If there are items, render the list."

But when `items.length === 0`, `&&` short-circuits and returns `0` — and React will literally render the number **0** on your page. Oops.

**Fix:** convert to a real boolean explicitly:

```jsx
{ items.length > 0 && <List items={items} /> }
```

This is the single most common truthy/falsy bug for new React developers. Now you know.

## React relevance

- Conditional rendering with `&&` and ternaries depends entirely on truthy/falsy.
- The `0` gotcha above is a real, frequent bug.
- `??` (module 02) only fires on `null`/`undefined` — that's why it's safer than `||` for defaults.

## Exercises

See `3-exercises.js`.
