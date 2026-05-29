# 13 — Async / Await

Some operations take time: fetching data over the network, reading a file, waiting for a timer. JavaScript handles these without freezing your program by using **Promises**.

## A Promise is "a value, eventually"

Think of it like a delivery receipt:
- The package is on the way.
- It will either **arrive** (resolve with a value) or **fail** (reject with an error).

```js
const promise = fetch("https://api.example.com/users");
// promise is not the users yet — it's the receipt.
```

## `await` — wait for the promise to resolve

Inside an `async` function, you can `await` a promise. It pauses until the promise resolves, then gives you the value.

```js
const getUsers = async () => {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  return data;
};
```

Two important rules:
- `await` only works inside a function marked `async`.
- An `async` function **always returns a Promise**, even if you write `return 42` inside it.

## Calling an async function

```js
const main = async () => {
  const users = await getUsers();
  console.log(users);
};

main();
```

## Handling errors with `try` / `catch`

Network requests can fail. Wrap awaits in `try`/`catch`:

```js
const safeGetUsers = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Something went wrong:", error);
    return [];   // sensible fallback
  }
};
```

## A tiny built-in promise: `setTimeout` wrapped

To practice without making real HTTP requests, we can wrap `setTimeout` in a promise to "fake" an async operation:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const demo = async () => {
  console.log("waiting...");
  await wait(1000);
  console.log("done!");
};

demo();
```

## `fetch` — built into modern Node and every browser

```js
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const todo = await response.json();
console.log(todo);
```

(`https://jsonplaceholder.typicode.com` is a free fake API used for learning.)

## Running things in parallel: `Promise.all`

If you have multiple independent async operations, awaiting them one by one is slow:

```js
// SEQUENTIAL — 1500ms total
const a = await fetchUser(1);   // wait
const b = await fetchUser(2);   // wait
const c = await fetchUser(3);   // wait
```

`Promise.all` runs them concurrently and waits for ALL to finish:

```js
// PARALLEL — ~500ms total (limited by the slowest)
const [a, b, c] = await Promise.all([
  fetchUser(1),
  fetchUser(2),
  fetchUser(3),
]);
```

Note we call each function (so the promises start) and pass the resulting promises
to `Promise.all`. If ANY of them rejects, `Promise.all` rejects immediately with that error.

Use `Promise.all` when the operations don't depend on each other. Use sequential
`await`s when each step needs the previous result.

## React relevance

You'll use this pattern inside `useEffect` to load data when a component mounts:

```js
useEffect(() => {
  const load = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };
  load();
}, []);
```

The async function is defined **inside** `useEffect` and then called — because `useEffect` itself cannot be `async`.

## Exercises

See `3-exercises.js`.

> Note: exercise 4 makes a real network request. If you're offline, skip it.
