# 04 — Functions

A function is a reusable block of code that takes inputs (called **parameters**) and returns an output.

## Function declaration

```js
function greet(name) {
  return "Hello, " + name;
}

greet("Jane");   // "Hello, Jane"
```

- `name` is the **parameter** (input).
- `return` is what the function gives back. If you don't `return`, the function returns `undefined`.

## Arrow functions — the React standard

The same function, as an arrow function:

```js
const greet = (name) => {
  return "Hello, " + name;
};
```

If the body is a single expression you want to return, you can drop the braces and the `return` keyword:

```js
const greet = (name) => "Hello, " + name;
```

If there's exactly one parameter, the parentheses are also optional:

```js
const greet = name => "Hello, " + name;
```

(Most React codebases keep the parens for consistency — pick a style.)

Multiple parameters:

```js
const add = (a, b) => a + b;
add(2, 3);   // 5
```

No parameters:

```js
const sayHi = () => "Hi!";
sayHi();   // "Hi!"
```

## Default parameter values

```js
const greet = (name = "stranger") => "Hello, " + name;

greet();        // "Hello, stranger"
greet("Jane");   // "Hello, Jane"
```

## Functions are values

This is the key idea that unlocks React.

You can store a function in a variable, pass it as an argument, or return it from another function — exactly like any other value.

```js
const double = (n) => n * 2;
const triple = (n) => n * 3;

const apply = (fn, value) => fn(value);

apply(double, 5);   // 10
apply(triple, 5);   // 15
```

## React relevance

**A React component IS a function.** Specifically, a function that takes a `props` object and returns something to render:

```js
const Greeting = (props) => <h1>Hello, {props.name}</h1>;
```

Event handlers (`onClick`, `onChange`) take functions as their value. Hooks like `useEffect(() => { ... })` take an arrow function as input. You will write more arrow functions in React than any other piece of syntax.

## Exercises

See `3-exercises.js`.
