// Run with:  node 3-exercises.js


// ── Test helper (ignore — scroll down to the TODOs) ─────────────────
const ok = (label, actual, expected) => {
  const pass =
    Object.is(actual, expected) ||
    JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    pass
      ? "  ✓ " + label
      : "  ✗ " + label + " — got " + JSON.stringify(actual) +
        ", expected " + JSON.stringify(expected)
  );
};
const section = async (name, fn) => {
  console.log("\n── " + name + " ──");
  try { await fn(); } catch (e) { console.log("  ⚠ skipped (" + e.message + ")"); }
};
// ────────────────────────────────────────────────────────────────────


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const slow = (label, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(label), ms));


// TODO 1: Write `safeDivide(a, b)` (async) that:
//         - throws new Error("cannot divide by zero") when b === 0
//         - otherwise returns a / b

// const safeDivide = async (a, b) => ...


// TODO 2: Write `runParallel(labels)` that takes an array of strings and runs
//         slow(label, 100) for each IN PARALLEL using Promise.all.
//         Returns the array of resolved labels.
//         (We test the elapsed time is closer to 100ms than 300ms.)

// const runParallel = async (labels) => ...


// TODO 3: Write `withRetry(fn, attempts)` that:
//         - calls fn() (a Promise-returning function)
//         - if it rejects, retries up to `attempts` total tries
//         - returns the value on first success
//         - re-throws the last error if all attempts fail

// const withRetry = async (fn, attempts) => ...


// TODO 4: Write `runInOrder(tasks)` where tasks is an array of zero-arg async functions.
//         Await each in order; return an array of all their results.

// const runInOrder = async (tasks) => ...


// ── TESTS ─────────────────────────────────────────────────────────────

await section("TODO 1: safeDivide", async () => {
  ok("10 / 2", await safeDivide(10, 2), 5);
  let caught;
  try { await safeDivide(10, 0); }
  catch (e) { caught = e.message; }
  ok("throws on divide-by-zero", caught, "cannot divide by zero");
});

await section("TODO 2: runParallel (timed)", async () => {
  const start = Date.now();
  const result = await runParallel(["A", "B", "C"]);
  const elapsed = Date.now() - start;
  ok("resolves to labels", result, ["A", "B", "C"]);
  ok("ran in parallel (< 250ms)", elapsed < 250, true);
});

await section("TODO 3: withRetry", async () => {
  let calls = 0;
  const flaky = async () => {
    calls++;
    if (calls < 3) throw new Error("temporary failure");
    return "succeeded on call " + calls;
  };
  const result = await withRetry(flaky, 5);
  ok("returns success", result, "succeeded on call 3");
  ok("called 3 times",  calls, 3);

  // All-failing case re-throws.
  let caught;
  try { await withRetry(async () => { throw new Error("nope"); }, 2); }
  catch (e) { caught = e.message; }
  ok("rethrows after attempts", caught, "nope");
});

await section("TODO 4: runInOrder", async () => {
  const tasks = [
    () => slow("first",  50),
    () => slow("second", 50),
    () => slow("third",  50),
  ];
  const start = Date.now();
  const results = await runInOrder(tasks);
  const elapsed = Date.now() - start;
  ok("results in order",      results, ["first", "second", "third"]);
  ok("ran sequentially (>=130ms)", elapsed >= 130, true);
});
