// Run with:  node 2-examples.js

const user = {
  name: "Jane",
  age: 36,
  isAdmin: true,
};

console.log(user);

// Dot notation
console.log(user.name);     // "Jane"
console.log(user.missing);  // undefined

// Bracket notation (use when key is in a variable)
console.log(user["age"]);
const key = "isAdmin";
console.log(user[key]);     // true

// Add a property
user.email = "jane@example.com";
console.log(user);

// Change a property
user.name = "Grace";
console.log(user);

// Nested
const post = {
  title: "Hello",
  author: { name: "Jane", handle: "@jane" },
};
console.log(post.author.name);   // "Jane"

// Property shorthand
const title = "Welcome";
const views = 100;
const summary = { title, views };
console.log(summary);   // { title: "Welcome", views: 100 }

// Array of objects (very common in React)
const users = [
  { name: "Jane", age: 36 },
  { name: "Grace", age: 45 },
];
console.log(users[0].name);   // "Jane"
console.log(users[1].age);    // 45
