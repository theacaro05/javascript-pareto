// Run with:  node 2-examples.js
//
// We pretend to be React. Each "component" is a function that takes a props
// object and returns a string of HTML. In real React you'd return JSX, which
// is just nicer syntax for the same idea.

// ─── A simple component ───────────────────────────────────────────────
const Greeting = ({ name, role = "guest" }) =>
  `<h1>Hello, ${name} (${role})</h1>`;

console.log(Greeting({ name: "Jane", role: "engineer" }));
console.log(Greeting({ name: "Linus" }));   // role defaults to "guest"

// ─── Conditional rendering with a ternary ─────────────────────────────
const Status = ({ isOnline }) =>
  isOnline
    ? `<span>🟢 online</span>`
    : `<span>⚪ offline</span>`;

console.log(Status({ isOnline: true }));
console.log(Status({ isOnline: false }));

// ─── Conditional rendering with && (the React pattern) ────────────────
const NotificationBadge = ({ count }) =>
  count > 0 ? `<span class="badge">${count}</span>` : "";

console.log(NotificationBadge({ count: 3 }));
console.log(NotificationBadge({ count: 0 }));   // empty string

// ─── List rendering with .map() ───────────────────────────────────────
const TodoList = ({ todos }) =>
  `<ul>${todos.map((t) => `<li>${t}</li>`).join("")}</ul>`;

console.log(TodoList({ todos: ["Learn JS", "Learn React", "Build something"] }));

// ─── Components calling components ────────────────────────────────────
const Header = ({ title }) => `<header><h1>${title}</h1></header>`;
const Body   = ({ text })  => `<main><p>${text}</p></main>`;
const Footer = () => `<footer>© 2026</footer>`;

const Page = ({ title, body }) => `
${Header({ title })}
${Body({ text: body })}
${Footer()}
`.trim();

console.log(Page({ title: "Welcome", body: "You learned the Pareto JS for React." }));

// ─── List of components ───────────────────────────────────────────────
const UserCard = ({ name, age }) =>
  `<div class="card">${name} (${age})</div>`;

const UserList = ({ users }) =>
  users.map((u) => UserCard(u)).join("\n");

const users = [
  { name: "Jane",   age: 36 },
  { name: "Grace", age: 45 },
  { name: "Linus", age: 55 },
];
console.log(UserList({ users }));
