# 14 — React Bridge

This module isn't new JavaScript — it's a victory lap. You already know everything you need to build a "React-style" component using nothing but plain JS. This module makes the mental model click.

## The realization

A React component is just:

> a **function** that takes a **props object** and **returns** something to display.

That's it. The display thing is normally JSX (React's HTML-like syntax), but JSX is just sugar for a function call. To prove you've got it, we'll fake JSX by returning **strings of HTML**.

## Plain-JS "component"

```js
const Greeting = ({ name, role = "guest" }) =>
  `<h1>Hello, ${name} (${role})</h1>`;

console.log(Greeting({ name: "Jane", role: "engineer" }));
// <h1>Hello, Jane (engineer)</h1>
```

Notice everything you used:

- **arrow function** (module 04)
- **destructuring with default** (module 09)
- **template literal** (module 10)

## Conditional rendering

```js
const Status = ({ isOnline }) =>
  isOnline ? `<span>🟢 online</span>` : `<span>⚪ offline</span>`;
```

That's a ternary (module 03). In real React: `{isOnline ? <Span>online</Span> : <Span>offline</Span>}`.

## Lists

```js
const TodoList = ({ todos }) =>
  `<ul>${todos.map((t) => `<li>${t}</li>`).join("")}</ul>`;
```

`.map()` (module 11) + template literals (module 10).

In real React: `<ul>{todos.map((t) => <li>{t}</li>)}</ul>` — same shape, no `.join("")` needed because React handles arrays of elements directly.

## Components calling components

```js
const Header = ({ title }) => `<header>${title}</header>`;
const Body   = ({ text })  => `<main>${text}</main>`;

const Page = ({ title, body }) => `
  ${Header({ title })}
  ${Body({ text: body })}
`;
```

In real React: `<Header title={title} />` — same idea, prettier syntax.

## What changes when you actually start React

- You'll write `<h1>...</h1>` directly in your JS files (JSX) instead of strings.
- You'll need a build tool (Vite, Next.js) to translate that JSX into function calls.
- You'll have **state** (`useState`) and **effects** (`useEffect`) — but those still take ordinary functions and ordinary values.
- The mental model — **functions take props and return UI** — is exactly the same.

## What this module's files do

- `2-examples.js` — defines several fake components and prints their rendered HTML strings.
- `3-exercises.js` — you build your own; inline tests check each one.

## You're ready

When you start React:

- A `prop` is just an object property → module 06.
- Destructured props are just object destructuring → module 09.
- `{user.name}` in JSX is just a JS expression → modules 01, 06.
- `{users.map(...)}` is just `.map()` → module 11.
- `{isActive && <Foo />}` is just `&&` short-circuit → modules 02, 08.
- `import { useState } from "react"` is just a named import → module 12.
- `useEffect(async ...)` patterns are just promises → module 13.

Everything in React is built from these pieces. Go learn React next.

## Exercises

See `3-exercises.js`.
