// Run with:  node 2-examples.js

const numbers = [1, 2, 3, 4, 5];

// .map — transform every item
console.log(numbers.map((n) => n * 2));        // [2, 4, 6, 8, 10]
console.log(numbers.map((n) => `#${n}`));      // ["#1", "#2", "#3", "#4", "#5"]

// Original is unchanged
console.log("original:", numbers);             // [1, 2, 3, 4, 5]

// .filter — keep only matches
console.log(numbers.filter((n) => n % 2 === 0));   // [2, 4]
console.log(numbers.filter((n) => n > 2));         // [3, 4, 5]

// .find — first match or undefined
console.log(numbers.find((n) => n > 3));        // 4
console.log(numbers.find((n) => n > 99));       // undefined

// .includes — true/false membership
console.log(numbers.includes(3));               // true
console.log(numbers.includes(99));              // false

// .reduce — collapse to one value
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("sum:", sum);                       // 15

// Working with objects (the React case)
const users = [
  { id: 1, name: "Jane",   isActive: true },
  { id: 2, name: "Grace", isActive: false },
  { id: 3, name: "Linus", isActive: true },
];

console.log(users.map((u) => u.name));                 // ["Jane", "Grace", "Linus"]
console.log(users.filter((u) => u.isActive));          // 2 users
console.log(users.find((u) => u.id === 2));            // Grace

// Chaining — read top to bottom
const activeNames = users
  .filter((u) => u.isActive)
  .map((u) => u.name);
console.log("active names:", activeNames);             // ["Jane", "Linus"]

// In React you'd write JSX:
// users.map((u) => <UserCard key={u.id} user={u} />)
// Here we fake it as a string:
const cards = users.map((u) => `<UserCard name="${u.name}" />`).join("\n");
console.log(cards);
