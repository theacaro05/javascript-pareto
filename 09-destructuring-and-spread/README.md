# 09 — Destructuring and Spread

Two tiny pieces of syntax you'll use constantly in React.

## Object destructuring

Pull properties out of an object into standalone variables.

```js
const user = { name: "Jane", age: 36 };

const { name, age } = user;

console.log(name);   // "Jane"
console.log(age);    // 36
```

Same as writing `const name = user.name; const age = user.age;` — just much shorter.

You can rename while destructuring (aka. assign the key to var of different name):

```js
const { name: firstName } = user; // { originalKey: newName }
console.log(firstName);   // "Jane"
```

And set defaults if the property is missing:

```js
const { country = "Unknown" } = user;
console.log(country);   // "Unknown"
```

### Nested destructuring

You can dig into nested objects in the same statement:

```js
const post = {
  title: "Hello",
  author: { name: "Jane", handle: "@jane" },
};

const { title, author: { name } } = post;
console.log(title, name);   // "Hello" "Jane"
```

The `author:` here is **not** giving you a variable called `author` — it's telling
the destructure where to dig. You end up with `title` and `name` as the variables.
If you want both `author` and `name`, do them separately.

### Destructuring function parameters

This is **the** pattern you'll see in every React component:

```js
// Instead of:
const Greeting = (props) => "Hello, " + props.name;

// Write:
const Greeting = ({ name }) => "Hello, " + name;
```

## Array destructuring

Pull items out of an array, position-by-position.

```js
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first);    // "red"
console.log(second);   // "green"
```

This is exactly how React's `useState` hook returns work:

```js
const [count, setCount] = useState(0);
```

## The spread operator: `...`

Spreads the contents of an array or object into a new one.

### Spreading arrays

```js
const a = [1, 2, 3];
const b = [...a, 4, 5];   // [1, 2, 3, 4, 5]

const merged = [...a, ...b];   // [1, 2, 3, 1, 2, 3, 4, 5]

// spread can go anywhere in the literal
const x = [2, 3];
const y = [6, 7];
const result = [1, ...x, 4, 5, ...y, 8];   // [1, 2, 3, 4, 5, 6, 7, 8]
```

Spread is how you **copy** an array (or add to it) without mutating the original. React requires you to never mutate state directly — spread is your tool for that.

### Spreading objects

```js
const user = { name: "Jane", age: 36 };

const updated = { ...user, age: 37 };
// { name: "Jane", age: 37 }
```

Reads as: "start with all of `user`'s properties, then override `age`."

Later properties win over earlier ones — handy for updates.

### Nested object spread (immutable nested update)

If your object has a nested object inside it, spreading the outer object and then writing a new value for `address` **replaces the whole `address` object** — losing everything that was inside it:

```js
const user = { name: "Jane", address: { street: "123 Main St", city: "Quito" } };

// ❌ Wrong — address.street is now undefined
const bad = { ...user, address: { city: "Madrid" } };

// ✅ Correct — spread the inner object too
const good = { ...user, address: { ...user.address, city: "Madrid" } };

```

`{ ...user.address, city: "Madrid" }` builds a brand-new object in two steps:
1. `...user.address` copies **all** properties from the nested object — so both `street: "123 Main St"` and `city: "Quito"` land in the new object.
2. `city: "Madrid"` is written after, so it overwrites the copied `"Quito"`.

Later keys always win — the same rule as basic object spread.

This is the pattern React uses when updating nested state without mutation.

## Rest with `...`

The **same `...` symbol** can also be used to *collect* values (the opposite of spreading).

```js
const [first, ...others] = [1, 2, 3, 4];
console.log(first);    // 1
console.log(others);   // [2, 3, 4]

const { name, ...rest } = { name: "Jane", age: 36, isAdmin: true };
console.log(name);     // "Jane"
console.log(rest);     // { age: 36, isAdmin: true }
```

### Rest in function parameters

`...` in a function parameter collects **all arguments** passed in into a regular array:

```js
const sumAll = (...nums) => nums.reduce((acc, n) => acc + n, 0);

sumAll(1, 2, 3);   // nums = [1, 2, 3]  →  6
sumAll(10, 20);    // nums = [10, 20]   →  30
```

`nums` **is** the array — rest always collects into one. The naming can be confusing: `...nums` doesn't mean you pass an array in, it means the function gathers whatever arguments you pass *into* an array called `nums`.

```js
sumAll(1, 2, 3)     // you pass separate numbers  →  inside: nums = [1, 2, 3]
sumAll([1, 2, 3])   // you pass one array          →  inside: nums = [[1, 2, 3]]  ← probably wrong
```

If you already have an array and want to pass it in, use spread at the call site:

```js
const numbers = [1, 2, 3];
sumAll(...numbers);  // spreads into separate args  →  inside: nums = [1, 2, 3]
```

The same `...` symbol, three different jobs depending on where it appears:
- In a **function parameter** → rest (collect all args into an array)
- On the **left** of `=` in destructuring → rest (collect remaining items)
- On the **right** of `=` in an expression → spread (expand)

> ⚠️ **VERY IMPORTANT:** The brackets are mandatory when destructuring — and they must match the shape of what you're destructuring:
> - `{ }` for objects
> - `[ ]` for arrays
>
> Without them, you just assign the whole object/array to the variable instead of extracting from it.

## React relevance

- **Destructure props:** `const Greeting = ({ name }) => ...` — every component.
- **Destructure hooks:** `const [value, setValue] = useState(...)` — every state hook.
- **Spread to update state:** `setUser({ ...user, age: 37 })` — instead of mutating.
- **Spread props:** `<Button {...rest} />` — forward leftover props.

If you only learn one syntax from this whole playground, learn this one.

## Exercises

See `3-exercises.js`.
