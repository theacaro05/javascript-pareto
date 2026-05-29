# 02 — Operators

Operators are symbols that combine or compare values.

## Arithmetic

```js
2 + 3   // 5
10 - 4  // 6
3 * 5   // 15
10 / 4  // 2.5
10 % 3  // 1   (remainder — useful for "every Nth thing")
```

## String concatenation with `+`

```js
"hello " + "world"   // "hello world"
"score: " + 42       // "score: 42"  (number gets converted to string)
```

(There's a nicer way to build strings — see module 10, template literals.)

## Comparison — always use `===` and `!==`

```js
3 === 3      // true
3 === "3"    // false   (different types)
3 !== 4      // true

5 > 3        // true
5 < 3        // false
5 >= 5       // true
5 <= 4       // false
```

**Why `===` and not `==`?**
`==` does sneaky type conversions:

```js
0 == ""        // true   (😱)
0 == false     // true   (😱)
"3" == 3       // true   (😱)
```

`===` doesn't. It only returns `true` if both type AND value match. **Always use `===`.** Treat `==` as if it doesn't exist.

## Logical operators

```js
true && true     // true     (AND — both must be truthy)
true && false    // false
true || false    // true     (OR — at least one must be truthy)
false || false   // false
!true            // false    (NOT — flips it)
!false           // true
```

In JS, `&&` and `||` are a bit special — they return one of their operands, not just `true`/`false`. You'll see why this matters in module 08 (truthy/falsy).

## Nullish coalescing: `??`

`??` gives you the right-hand value only when the left is `null` or `undefined`:

```js
const name = userInput ?? "Anonymous";
// if userInput is null OR undefined → "Anonymous"
// otherwise → userInput (even if it's 0 or "")
```

This is different from `||`, which also fires for `0`, `""`, `false`. Use `??` when you want a default *only* for missing values.

## React relevance

You'll use `===` for comparisons, `!` to flip booleans (`!isOpen`), `&&` for conditional rendering (`{isLoggedIn && <Profile />}`), and `??` for default prop values. All four show up on day one.

## Exercises

See `3-exercises.js`.
