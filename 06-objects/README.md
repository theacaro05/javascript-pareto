# 06 — Objects

An object is a collection of **key-value pairs**.

## Creating objects

```js
const user = {
  name: "Jane",
  age: 36,
  isAdmin: true,
};
```

Each line is a property: a **key** (`name`), a colon, and a **value** (`"Jane"`).

## Reading properties — dot notation

```js
user.name      // "Jane"
user.age       // 36
user.missing   // undefined  (no error)
```

## Reading properties — bracket notation

Useful when the key is in a variable, or contains special characters:

```js
user["name"]              // "Jane"

const key = "age";
user[key]                 // 36
```

In day-to-day React code, **dot notation is far more common**. Use brackets when you must.

## Setting properties with a variable key

Bracket notation works for writing too, not just reading. Use it when the key name comes from a variable:

```js
const field = "age";

user[field] = 36;    // same as user.age = 36
user.field   = 36;   // ✗ wrong — adds a key literally named "field"
```

This comes up whenever you need to set a key dynamically at runtime — for example, building a grouped object inside `.reduce()`:

```js
const groups = {};
const category = "food";

groups[category] = [];      // groups = { food: [] }
groups[category].push("coffee");  // groups = { food: ["coffee"] }
```

**Rule of thumb:** dot notation when you know the key name upfront, bracket notation when the key is stored in a variable.

## Adding and changing properties

```js
const user = { name: "Jane" };

user.age = 36;             // add a new property
user.name = "Grace";       // change an existing one
console.log(user);         // { name: "Grace", age: 36 }
```

Note: even though `user` is `const`, you can change the *contents* of the object. `const` means the variable can't be reassigned to a different value, not that the object is frozen.

## Nested objects

```js
const post = {
  title: "Hello",
  author: {
    name: "Jane",
    handle: "@jane",
  },
};

post.author.name   // "Jane"
```

## Property shorthand

If the key and the variable name match, you can write it once:

```js
const name = "Jane";
const age = 36;

const user = { name, age };
// same as { name: name, age: age }
```

## Objects vs arrays — when to use which

- **Array**: ordered list of similar things — `[1, 2, 3]`, `["red", "green"]`.
- **Object**: a single thing with named properties — `{ name, age, email }`.

You'll often combine them: an array of objects.

```js
const users = [
  { name: "Jane", age: 36 },
  { name: "Grace", age: 45 },
];
```

## React relevance

**Props are an object.** When you write `<Greeting name="Jane" age={36} />`, React calls your component with `{ name: "Jane", age: 36 }` as the argument. **State is usually an object too.** Knowing how to read, update, and pass around objects is core to React.

## Exercises

See `3-exercises.js`.
