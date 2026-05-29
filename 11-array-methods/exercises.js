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


const orders = [
  { id: 1, user: "Jane",   total: 120, status: "paid",     items: ["pen", "book"] },
  { id: 2, user: "Grace", total:  45, status: "pending",  items: ["mug"] },
  { id: 3, user: "Jane",   total:  80, status: "paid",     items: ["lamp"] },
  { id: 4, user: "Linus", total: 200, status: "refunded", items: ["chair"] },
  { id: 5, user: "Grace", total:  60, status: "paid",     items: ["pen", "notebook", "mug"] },
  { id: 6, user: "Jane",   total:  30, status: "pending",  items: ["pen"] },
];


// TODO 1: ASSIGN `paidIds` — array of IDs of all PAID orders. (filter + map)

let paidIds = orders
  .filter(order => order.status === "paid")
  .map(paidOrder => paidOrder.id);


// TODO 2: ASSIGN `biggest` — the order with the highest `total`. (reduce)

let biggest = orders.reduce((biggestOrder, order) => order.total > biggestOrder.total ? order : biggestOrder, {total:0});


// TODO 3: ASSIGN `revenue` — total from PAID orders only. (filter + reduce)

let revenue = orders
  .filter(order => order.status === "paid")
  .reduce((total, order) => total += order.total, 0);

orders;
// TODO 4: ASSIGN `janeLatestPaid` — Jane's most-recent PAID order
//         (highest id where status="paid" and user="Jane").

let janeLatestPaid = orders
  .filter(order => order.user === "Jane" && order.status === "paid")
  .reduce((latest, order) => order.id > latest.id ? order : latest, {id:0});


// TODO 5: ASSIGN `allItems` — flatten every `items` array into one array (reduce + spread).

let allItems = orders.reduce((items, order) => [...items, ...order.items], []);


// TODO 6: ASSIGN `userCounts` — object counting orders per user.
//         Expected: { Jane: 3, Grace: 2, Linus: 1 }

let userCounts = orders.reduce((grouped, order) => {
  let userKey = order.user;
  if (!grouped[userKey]) grouped[userKey] = 0;
  grouped[userKey] += 1;
  return grouped;

}, {})


// TODO 7: ASSIGN `uniqueUsers` — unique users in order of first appearance.
//         Use filter + includes (no Set).
//         Expected: ["Jane", "Grace", "Linus"]

let uniqueUsers = orders
  .map(order => ({id:order.id, use:order.user}));
  uniqueUsers;


// TODO 8 (capstone): ASSIGN `summary` — one entry per user:
//         [
//           { user: "Jane",   orders: 3, totalSpent: 230 },
//           { user: "Grace", orders: 2, totalSpent: 105 },
//           { user: "Linus", orders: 1, totalSpent: 200 },
//         ]
//         Use uniqueUsers + map + filter + reduce.

let summary;


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: paidIds", () => {
  ok("paidIds", paidIds, [1, 3, 5]);
});

section("TODO 2: biggest order", () => {
  ok("biggest.id", biggest.id, 4);
  ok("biggest.total", biggest.total, 200);
});

section("TODO 3: revenue", () => {
  ok("revenue from paid", revenue, 260);
});

section("TODO 4: Jane's latest paid", () => {
  ok("janeLatestPaid.id", janeLatestPaid.id, 3);
});

section("TODO 5: allItems", () => {
  ok("length",   allItems.length, 9);
  ok("contents", allItems, ["pen","book","mug","lamp","chair","pen","notebook","mug","pen"]);
});

section("TODO 6: userCounts", () => {
  ok("userCounts", userCounts, { Jane: 3, Grace: 2, Linus: 1 });
});

section("TODO 7: uniqueUsers", () => {
  ok("uniqueUsers", uniqueUsers, ["Jane", "Grace", "Linus"]);
});

section("TODO 8: summary", () => {
  ok("summary", summary, [
    { user: "Jane",   orders: 3, totalSpent: 230 },
    { user: "Grace", orders: 2, totalSpent: 105 },
    { user: "Linus", orders: 1, totalSpent: 200 },
  ]);
});
