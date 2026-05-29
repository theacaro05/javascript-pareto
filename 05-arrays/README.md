# 05 — Arrays

An array is an ordered list of values.

## Creating arrays

```js
const colors = ["red", "green", "blue"];
const empty = [];
const mixed = [1, "two", true, null];   // items can be any type
```

## Accessing by index — starts at 0

```js
const colors = ["red", "green", "blue"];

colors[0]   // "red"
colors[1]   // "green"
colors[2]   // "blue"
colors[99]  // undefined  (no error — just undefined)
```

## Length

```js
colors.length   // 3
```

To get the **last** item:

```js
colors[colors.length - 1]   // "blue"
```

## Adding and removing items (mutating)

```js
const items = ["a", "b"];

items.push("c");   // adds to end:  ["a", "b", "c"]
items.pop();       // removes from end: ["a", "b"]   (returns "c")

items.unshift("z");  // adds to start: ["z", "a", "b"]
items.shift();       // removes from start: ["a", "b"]
```

**Heads up:** These methods *mutate* the array (change it in place). In React, you usually want to create a *new* array instead — we'll cover that with spread (module 09) and `.map()` (module 11). For now, just know these exist.

## Checking if something is in the array

```js
[1, 2, 3].includes(2)   // true
[1, 2, 3].includes(99)  // false
```

## Copying a portion with `slice`

`slice` returns a **new** array — it never mutates the original.

Every index has two forms:

```
arr = ["a", "b", "c", "d"]
        0    1    2    3     ← positive (left to right)
       -4   -3   -2   -1    ← negative (right to left)
```

### Two arguments: `slice(start, end)` — start **inclusive**, end **exclusive**

```
arr.slice(1, 3)

arr = [ "a", "b", "c", "d" ]
         0    1    2    3
              ↑         ↑
           included   excluded

result: [ "b", "c" ]
```

Negative end index works the same way — `-1` means "stop before the last item":

```
arr.slice(0, -1)

arr = [ "a", "b", "c", "d" ]
         0    1    2   -1
         ↑              ↑
       start           excluded

result: [ "a", "b", "c" ]
```

### One argument: `slice(start)` — goes to the end

```
arr.slice(-2)

arr = [ "a", "b", "c", "d" ]
        -4   -3   -2   -1
                   ↑
                 start → end

result: [ "c", "d" ]
```

### Quick reference

| Call           | Meaning                           |
|----------------|-----------------------------------|
| `slice(0, -1)` | everything except the last item   |
| `slice(-2)`    | last 2 items                      |
| `slice(-N)`    | last N items                      |
| `slice(1)`     | everything except the first item  |

## Iterating

We'll cover `for...of` in module 07 and `.map()`/`.filter()` in module 11 — those are where arrays get powerful for React.

## React relevance

Lists of things — todos, users, messages, products — are arrays. Rendering them in React means calling `.map()` on the array (module 11). Knowing how arrays are indexed and what `length` does is essential prep.

## Exercises

See `3-exercises.js`.
