// Run with:  node 2-examples.js

// --- Object destructuring ---
const user = { name: "Jane", age: 36 };

const { name, age } = user;
console.log(name, age);   // Jane 36

// Rename while destructuring
const { name: firstName } = user;
console.log(firstName);   // Jane

// Default if missing
const { country = "Unknown" } = user;
console.log(country);   // Unknown

// Destructure in a function parameter (the React pattern!)
const greet = ({ name }) => "Hello, " + name;
console.log(greet({ name: "Jane", age: 36 }));

// --- Array destructuring ---
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);   // red green

// Like useState in React
const useFakeState = () => [0, (n) => console.log("set to", n)];
const [count, setCount] = useFakeState();
console.log("count:", count);
setCount(5);

// --- Spread ---
// Arrays
const a = [1, 2, 3];
const b = [...a, 4, 5];
console.log(b);                   // [1, 2, 3, 4, 5]
console.log([...a, ...b]);        // [1, 2, 3, 1, 2, 3, 4, 5]

// Objects
const u = { name: "Jane", age: 36 };
const updated = { ...u, age: 37 };
console.log(updated);             // { name: "Jane", age: 37 }

// --- Rest (collect) ---
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);          // 1 [2, 3, 4]

const { name: nm, ...rest } = { name: "Jane", age: 36, isAdmin: true };
console.log(nm, rest);            // Jane { age: 36, isAdmin: true }
