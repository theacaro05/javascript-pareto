// Run with:  node 2-examples.js

// A helper that resolves after `ms` milliseconds.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// An async function that uses await.
const demo = async () => {
  console.log("step 1");
  await wait(500);          // pause for half a second
  console.log("step 2 (after 500ms)");
  await wait(500);
  console.log("step 3 (after another 500ms)");
};

demo();

// An async function returning a value — it actually returns a Promise.
const compute = async () => 42;
compute().then((v) => console.log("compute resolved to:", v));

// try/catch around an async call
const safeRun = async () => {
  try {
    await wait(100);
    throw new Error("boom");
  } catch (err) {
    console.log("caught:", err.message);
  }
};
safeRun();

// Real network request to a public test API.
// If you're offline, this will fail — that's fine.
const fetchTodo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    console.log("fetched todo:", todo);
  } catch (err) {
    console.log("network error (skip if offline):", err.message);
  }
};
fetchTodo();
