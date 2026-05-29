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


// TODO 1: `messageFor(count)` returns:
//             "You have 0 messages"
//             "You have 1 message"      ← singular!
//             "You have 5 messages"

const messageFor = (count) => `You have ${count} ${ count === 1 ? 'message': 'messages'}`;


// TODO 2: `classes({ isActive, isDisabled, size })` builds a className string.
//         Rules:
//           - always include "btn" and "btn-<size>"
//           - add " btn-active"   when isActive is true
//           - add " btn-disabled" when isDisabled is true
//         Examples:
//           classes({ isActive: true,  isDisabled: false, size: "md" }) → "btn btn-md btn-active"
//           classes({ isActive: false, isDisabled: true,  size: "lg" }) → "btn btn-lg btn-disabled"
//           classes({ isActive: false, isDisabled: false, size: "sm" }) → "btn btn-sm"

const classes = ({ isActive, isDisabled, size }) =>`btn btn-${size}${isActive ? " btn-active" : ""}${isDisabled ? " btn-disabled" : ""}`;
console.log(classes({ isActive: true,  isDisabled: false, size: "md" }));

// TODO 3: `postPath(userId, page)` returns:
//             "/users/42/posts"             when page is undefined
//             "/users/42/posts?page=3"      when page is provided

// const postPath = (userId, page) => `/users/${userId}/posts${page ? "?page=" + page:""}`; //bad estas mezclando template literal + concatenations
const postPath = (userId, page) => `/users/${userId}/posts${page ? `?page=${page}`:""}`;


// TODO 4: `invoiceText(invoice)` returns a multi-line string:
//             ────────────────
//             Invoice #1042
//             Customer: Jane Doe
//             Total: $123.45
//             ────────────────
//         (Use a single template literal with embedded newlines.)

const invoiceText = (invoice) => {
  return `────────────────
Invoice #${invoice.number}
Customer: ${invoice.customer}
Total: $${invoice.total}
────────────────`;
}


// TODO 5: `toUL(items)` returns:
//             "<ul><li>apples</li><li>oranges</li><li>pears</li></ul>"
//         Use items.map(...).join("") inside a template literal.

const toUL = (items) => `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;


// TODO 6: `greetUser(user)` returns:
//           - "Welcome, guest!"                          if user is null/undefined
//           - "Welcome back, <name>!"                    if user.visits > 0
//           - "Welcome to the site, <name>!"             if user.visits === 0

const greetUser = (user) => {
  if (!user) return `Welcome, guest!`;
  if (user.visits > 0) return `Welcome back, ${user.name}!`;
  if (user.visits === 0) return `Welcome to the site, ${user.name}!`;
}


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: messageFor", () => {
  ok("0", messageFor(0), "You have 0 messages");
  ok("1", messageFor(1), "You have 1 message");
  ok("5", messageFor(5), "You have 5 messages");
});

section("TODO 2: classes", () => {
  ok("active md",        classes({ isActive: true,  isDisabled: false, size: "md" }), "btn btn-md btn-active");
  ok("disabled lg",      classes({ isActive: false, isDisabled: true,  size: "lg" }), "btn btn-lg btn-disabled");
  ok("plain sm",         classes({ isActive: false, isDisabled: false, size: "sm" }), "btn btn-sm");
  ok("both",             classes({ isActive: true,  isDisabled: true,  size: "md" }), "btn btn-md btn-active btn-disabled");
});

section("TODO 3: postPath", () => {
  ok("no page", postPath(42),    "/users/42/posts");
  ok("page 3",  postPath(42, 3), "/users/42/posts?page=3");
});

section("TODO 4: invoice", () => {
  const result = invoiceText({ number: 1042, customer: "Jane Doe", total: 123.45 });
  const expected = "────────────────\nInvoice #1042\nCustomer: Jane Doe\nTotal: $123.45\n────────────────";
  ok("invoice text", result, expected);
});

section("TODO 5: toUL", () => {
  ok("3 items", toUL(["apples", "oranges", "pears"]), "<ul><li>apples</li><li>oranges</li><li>pears</li></ul>");
  ok("1 item",  toUL(["only"]),                       "<ul><li>only</li></ul>");
});

section("TODO 6: greetUser", () => {
  ok("null user",     greetUser(null),                                  "Welcome, guest!");
  ok("undefined user", greetUser(undefined),                            "Welcome, guest!");
  ok("first visit",   greetUser({ name: "Jane",   visits: 0 }),          "Welcome to the site, Jane!");
  ok("returning",     greetUser({ name: "Grace", visits: 12 }),         "Welcome back, Grace!");
});
