// Run with:  node 3-exercises.js


// ── Test helper (ignore — scroll down to the TODOs) ─────────────────
const ok = (label, actual, expected) => {
  const pass =
    Object.is(actual, expected) ||
    JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    pass
      ? "  ✓ " + label
      : "  ✗ " + label + " — got " + JSON.stringify(actual) +
        ", expected " + JSON.stringify(expected)
  );
};
const section = (name, fn) => {
  console.log("\n── " + name + " ──");
  try { fn(); } catch (e) { console.log("  ⚠ skipped (" + e.message + ")"); }
};
// ────────────────────────────────────────────────────────────────────


// TODO 1: Build a shopping cart object.
//         `cart` must have EXACTLY these fields (so tests can check):
//           items: [
//             { name: "Pen",      price: 2,  qty: 3 },
//             { name: "Notebook", price: 5,  qty: 2 },
//             { name: "Lamp",     price: 30, qty: 1 },
//           ],
//           discount: 5,
//           customer: {
//             name: "Jane",
//             email: "jane@example.com",
//             address: { city: "Quito", country: "Ecuador" },
//           }
const items = [
  { name: "Pen",      price: 2,  qty: 3 },
  { name: "Notebook", price: 5,  qty: 2 },
  { name: "Lamp",     price: 30, qty: 1 },
];
const discount = 5;
const customer = {
  name: "Jane",
  email: "jane@example.com",
  address: { city: "Quito", country: "Ecuador" },
};
let cart = {items, discount, customer}

// TODO 2: ASSIGN three values reached via chained dot access from `cart`:
let secondItemName = cart.items[1].name;     // expected "Notebook"
let customerCity = cart.customer.address.city;       // expected "Quito"
let customerEmail = cart.customer.email;      // expected "jane@example.com"


// TODO 3: Compute the cart SUBTOTAL by hand (sum of price * qty for each item).
//         Write it as a single arithmetic expression accessing items by index.

const item0 = cart.items[0];
const item1 = cart.items[1];
const item2 = cart.items[2];
let subtotal = item0.price * item0.qty + item1.price * item1.qty + item2.price * item2.qty;           // expected 46  (2*3 + 5*2 + 30*1)


// TODO 4: Dynamic key access.
//         ASSIGN `priceViaBracket` to product["price"] using a variable, NOT dot.
//         Then write `pick(obj, key)` arrow function and use it for skuViaPick.

const product = { sku: "X-100", name: "Lamp", price: 29.99, inStock: true };
const field = "price";
let priceViaBracket = product[field];
const pick = (obj, key) => obj[key];
// const pick = (obj, key) => obj.key; // doesn't work cause it's looking for product.key
const skuKey = "sku";
let skuViaPick = pick(product, skuKey);


// TODO 5: Property shorthand + nested construction.
//         Build `user5` with shorthand `name` and `age`, plus a nested `address: { city }`
//         (also using shorthand for city).

const name = "Jane";
const age = 36;
const city = "Quito";
const address = {
  city
}
let user5 = {name, age, address}
// Expected: { name: "Jane", age: 36, address: { city: "Quito" } }


// TODO 6: Deep navigation.
//         ASSIGN `firstCommentText` to the text of the first comment on the first post.

const user6 = {
  name: "Jane",
  posts: [
    { title: "Hello", comments: [{ from: "Grace", text: "Welcome!" }] },
    { title: "World", comments: [] },
  ],
};
let firstCommentText = user6.posts[0].comments[0].text;
let secondPostFirstComment;   // ASSIGN to user6.posts[1].comments[0]
user6.posts[1].comments[0] = secondPostFirstComment;


// TODO 7: Same-key merge by hand.
//         Build `merged` containing all keys from `base` and `updates`.
//         When a key appears in both, the value from `updates` wins.
//         Do it property by property — no spread yet.

const base    = { name: "Jane", age: 36, role: "user" };
const updates = { age: 37, role: "admin", email: "jane@example.com" };
let merged = {name: base.name, age: base.age, role: base.role};
merged.age = updates.age;
merged.role = updates.role;
merged.email = updates.email
// Expected: { name: "Jane", age: 37, role: "admin", email: "jane@example.com" }


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: shopping cart shape", () => {
  ok("cart.items[0]",       cart.items[0],       { name: "Pen",      price: 2,  qty: 3 });
  ok("cart.items[1]",       cart.items[1],       { name: "Notebook", price: 5,  qty: 2 });
  ok("cart.items[2]",       cart.items[2],       { name: "Lamp",     price: 30, qty: 1 });
  ok("cart.discount",       cart.discount,       5);
  ok("cart.customer.address.country", cart.customer.address.country, "Ecuador");
});

section("TODO 2: chained access", () => {
  ok("secondItemName", secondItemName, "Notebook");
  ok("customerCity",   customerCity,   "Quito");
  ok("customerEmail",  customerEmail,  "jane@example.com");
});

section("TODO 3: subtotal", () => {
  ok("subtotal", subtotal, 46);
});

section("TODO 4: dynamic access", () => {
  ok("priceViaBracket", priceViaBracket, 29.99);
  ok("skuViaPick",      skuViaPick,      "X-100");
});

section("TODO 5: shorthand + nested", () => {
  ok("user5", user5, { name: "Jane", age: 36, address: { city: "Quito" } });
});

section("TODO 6: deep navigation", () => {
  ok("firstCommentText",       firstCommentText, "Welcome!");
  ok("secondPostFirstComment", secondPostFirstComment, undefined);
});

section("TODO 7: manual merge", () => {
  ok("merged", merged, { name: "Jane", age: 37, role: "admin", email: "jane@example.com" });
});
