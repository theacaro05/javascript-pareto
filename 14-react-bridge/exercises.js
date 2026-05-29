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
const includes = (label, haystack, needle) => {
  const pass = typeof haystack === "string" && haystack.includes(needle);
  console.log(pass ? "  ✓ " + label : "  ✗ " + label + " — '" + needle + "' not in output");
};
const section = (name, fn) => {
  console.log("\n── " + name + " ──");
  try { fn(); } catch (e) { console.log("  ⚠ skipped (" + e.message + ")"); }
};
// ────────────────────────────────────────────────────────────────────


// TODO 1: `Button({ label, disabled, variant = "primary" })`
//         Returns:
//           '<button class="btn btn-primary">Save</button>'            // default
//           '<button class="btn btn-danger" disabled>Delete</button>'  // disabled + variant

// const Button = ...


// TODO 2: `Price({ amount, currency = "USD" })`
//         Returns '<span>USD 9.99</span>'.
//         Use amount.toFixed(2) to always show 2 decimals.

// const Price = ...


// TODO 3: `Tags({ tags })`
//         tags is an array of strings. Return:
//           '<span class="tag">#js</span> <span class="tag">#react</span>'
//         If tags is empty, return "".

// const Tags = ...


// TODO 4: `Stat({ label, value })` + `StatGrid({ stats })`
//         Stat returns: '<div class="stat"><strong>Orders</strong>: 5</div>'
//         StatGrid returns: '<div class="stat-grid">' + (one Stat per stat) + '</div>'

// const Stat = ...
// const StatGrid = ...


// TODO 5: `UserCard({ user })`
//         Output (no required exact whitespace — just include each part):
//           <div class="user">
//             <h3>NAME</h3>
//             <p>Role: ROLE</p>
//             [<span class="badge badge-verified">✓ Verified</span>]  (only if verified)
//             [<span class="badge badge-staff">★ Staff</span>]         (only if role !== "user")
//           </div>

// const UserCard = ...


// TODO 6 (CAPSTONE): `Dashboard({ user, orders })`
//         Returns ONE big HTML string containing:
//           - header: "Welcome, NAME!"  OR  "Admin dashboard — NAME"  (if user.role === "admin")
//           - StatGrid with: Orders count, Spent total ($N), Pending count
//           - <section class="recent-orders">: top 3 PAID orders by id (descending),
//             each rendered as: <div class="order">#ID — ITEM — $TOTAL</div>
//             OR <p>No paid orders yet.</p> when there are none
//           - <footer>: "© <year>"

// const Dashboard = ...


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: Button", () => {
  ok("default",  Button({ label: "Save" }),                                     '<button class="btn btn-primary">Save</button>');
  ok("disabled", Button({ label: "Delete", disabled: true, variant: "danger" }), '<button class="btn btn-danger" disabled>Delete</button>');
});

section("TODO 2: Price", () => {
  ok("default currency", Price({ amount: 9.999 }),                  "<span>USD 10.00</span>");
  ok("EUR + int",         Price({ amount: 12, currency: "EUR" }),    "<span>EUR 12.00</span>");
  ok("half cent",         Price({ amount: 0.5 }),                    "<span>USD 0.50</span>");
});

section("TODO 3: Tags", () => {
  ok("three tags", Tags({ tags: ["js", "react", "fun"] }),
                  '<span class="tag">#js</span> <span class="tag">#react</span> <span class="tag">#fun</span>');
  ok("empty",      Tags({ tags: [] }), "");
});

section("TODO 4: Stat & StatGrid", () => {
  ok("Stat",     Stat({ label: "Orders", value: 5 }), '<div class="stat"><strong>Orders</strong>: 5</div>');
  ok("StatGrid", StatGrid({ stats: [{ label: "A", value: 1 }, { label: "B", value: 2 }] }),
                 '<div class="stat-grid"><div class="stat"><strong>A</strong>: 1</div><div class="stat"><strong>B</strong>: 2</div></div>');
});

section("TODO 5: UserCard", () => {
  const janeCard = UserCard({ user: { name: "Jane", role: "admin", verified: true } });
  includes("admin: name",     janeCard, "Jane");
  includes("admin: role",     janeCard, "Role: admin");
  includes("admin: verified", janeCard, "badge-verified");
  includes("admin: staff",    janeCard, "badge-staff");

  const gracieCard = UserCard({ user: { name: "Grace", role: "user", verified: false } });
  includes("user: name",         gracieCard, "Grace");
  console.log(
    !gracieCard.includes("badge-verified")
      ? "  ✓ user: no verified badge"
      : "  ✗ user: should NOT have verified badge"
  );
  console.log(
    !gracieCard.includes("badge-staff")
      ? "  ✓ user: no staff badge"
      : "  ✗ user: should NOT have staff badge"
  );
});

section("TODO 6: Dashboard capstone", () => {
  const data = {
    user: { name: "Jane", role: "admin", verified: true },
    orders: [
      { id: 1, item: "Pen",      total:   3, status: "paid"     },
      { id: 2, item: "Book",     total:  18, status: "pending"  },
      { id: 3, item: "Lamp",     total:  45, status: "paid"     },
      { id: 4, item: "Chair",    total: 120, status: "refunded" },
      { id: 5, item: "Mug",      total:   9, status: "paid"     },
      { id: 6, item: "Notebook", total:   7, status: "paid"     },
      { id: 7, item: "Stapler",  total:  12, status: "pending"  },
    ],
  };
  const html = Dashboard(data);

  includes("admin header",            html, "Admin dashboard — Jane");
  includes("orders count = 7",        html, ">: 7</div>");
  includes("spent total = $214",      html, "$214");
  includes("pending count = 2",       html, ">: 2</div>");
  includes("recent #6",               html, "#6 — Notebook");
  includes("recent #5",               html, "#5 — Mug");
  includes("recent #3",               html, "#3 — Lamp");
  console.log(
    !html.includes("#4")
      ? "  ✓ excluded refunded #4"
      : "  ✗ should not include refunded #4"
  );
  console.log(
    !html.includes("#7")
      ? "  ✓ excluded pending #7"
      : "  ✗ should not include pending #7"
  );
  includes("footer with year",        html, "©");

  // Non-admin variant — uses "Welcome, NAME!"
  const html2 = Dashboard({ user: { name: "Grace", role: "user" }, orders: [] });
  includes("regular user header", html2, "Welcome, Grace!");
  includes("no paid orders message", html2, "No paid orders yet");
});
