# 01 — Variables and Types

A **variable** is a named container for a value.

## Declaring variables: `let` and `const`

```js
let age = 30;          // can be reassigned later
const name = "Jane";    // cannot be reassigned
```

**Rule of thumb:** use `const` by default. Only switch to `let` when you actually need to reassign.

```js
let counter = 0;
counter = counter + 1;   // OK
counter = 5;             // OK

const PI = 3.14;
PI = 3.14159;            // ERROR — cannot reassign a const
```

> You may see `var` in old tutorials. **Don't use it.** It has weird scoping rules and was replaced by `let`/`const` years ago.

## The types you'll actually use

JavaScript has a handful of primitive types. The five you'll meet in React:

| Type | Example | Notes |
|---|---|---|
| `string` | `"hello"` or `'hello'` | Text. Single or double quotes work; pick one and stay consistent. |
| `number` | `42`, `3.14`, `-7` | Integers and decimals are both `number`. |
| `boolean` | `true`, `false` | Yes/no values. |
| `null` | `null` | Intentional "no value." |
| `undefined` | `undefined` | "Not set yet." A variable you declare without a value is `undefined`. |

```js
const greeting = "hello";   // string
const score = 99;           // number
const isReady = true;       // boolean
const result = null;        // null  (we explicitly say "no value")
let next;                   // undefined (we declared it but never set it)
```

## Checking a type with `typeof`

```js
typeof "hello"   // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object"  ← a famous JS quirk; don't panic, just remember it
```

## React relevance

Almost everything in a React component is a variable: props are variables passed in, state is a variable you can update, JSX expressions read from variables. Knowing `let` vs `const` and the basic types is non-negotiable.

## Exercises

See `3-exercises.js`.
