# 10 — Template Literals

Template literals are strings written with **backticks** (`` ` ``) instead of quotes. They let you embed variables and expressions directly.

## Basic interpolation

```js
const name = "Jane";

const msg = `Hello, ${name}!`;
console.log(msg);   // "Hello, Jane!"
```

Inside a template literal, anything between `${ ... }` is JavaScript that gets evaluated and converted to a string.

## You can put any expression in `${ ... }`

Not just variable names:

```js
const a = 3, b = 4;

`${a} + ${b} = ${a + b}`            // "3 + 4 = 7"
`Today is ${new Date().getFullYear()}`
`${score >= 50 ? "pass" : "fail"}`   // ternaries work here too
```

## Multi-line strings

Regular quoted strings can't span multiple lines. Template literals can:

```js
const poem = `Roses are red
Violets are blue
JavaScript is weird
But so are you`;
console.log(poem);
```

Newlines in the source become real newlines in the string.

**Watch out for indentation.** Leading spaces inside a template literal are part of the string. If your code is indented, align the content to the left edge of the template:

```js
// ❌ Wrong — "City:" and "Country:" will have leading spaces
const formatAddress = (city, country) => {
  return `Address:
          City: ${city}
          Country: ${country}`;
};

// ✅ Correct — content starts at column 0
const formatAddress = (city, country) => {
  return `Address:
City: ${city}
Country: ${country}`;
};
```

It looks awkward, but that's the trade-off — the indentation is literal.

## Compared to old-school `+` concatenation

```js
// old:
"Hello, " + name + "! You have " + count + " messages."

// new:
`Hello, ${name}! You have ${count} messages.`
```

Almost always cleaner.

## React relevance

You'll use template literals constantly for:

- **Dynamic `className`s**: `` className={`btn ${isActive ? "btn-active" : ""}`} ``
- **Built strings inside JSX**: `` <h1>{`Welcome, ${name}`}</h1> `` (though usually you can split it: `<h1>Welcome, {name}</h1>`)
- **Building URLs**: `` `/users/${userId}/posts` ``

## Exercises

See `3-exercises.js`.
