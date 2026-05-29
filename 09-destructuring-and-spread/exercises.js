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


// TODO 1: Nested destructuring — in ONE statement, pull out:
//             userName, userStreet, userCountry
//         from `user1`.
//         Hint: const { name: userName, address: { street: userStreet, country: userCountry } } = user1;

const user1 = {
  name: "Jane",
  address: { street: "123 Pareto St", city: "Quito", country: "Ecuador" },
};
const {name: userName, address: {street: userStreet, country: userCountry} } = user1;


// TODO 2: Array destructuring with skip — pull the FIRST and THIRD only.

const colors = ["red", "green", "blue", "yellow", "purple"];
const [firstColor, , thirdColor] = colors;


// TODO 3: Destructure with default AND rename.
//         From `config3`, destructure:
//           - `port` (default 3000), renamed to `serverPort`
//           - `host` (default "localhost")

const config3 = { host: "example.com" };
const {serverPort = 3000, host = "localhost"} = config3;


// TODO 4: Immutable nested update.
//         Build `updated4` from `original4` — same shape but address.city set to "Madrid".
//         original4 must NOT be mutated. (Use nested spread.)

const original4 = {
  name: "Jane",
  address: { street: "123 Pareto St", city: "Quito", country: "Ecuador" },
};

const updated4 = {...original4, address: {...original4.address, city: "Madrid"}};


// TODO 5: Write `sumAll(...nums)` that takes any number of arguments and returns the total.

const sumAll = (...nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}


// TODO 6: Merge with override using spread.
//         Build `merged6` with all keys from `defaults6` and `overrides6`;
//         `overrides6` wins on shared keys.

const defaults6  = { theme: "light", lang: "en", showSidebar: true,  fontSize: 14 };
const overrides6 = { theme: "dark",  showSidebar: false };
const merged6 = {...defaults6, ...overrides6}


// TODO 7: Destructure + rest.
//         From the post, pull out `id` and `title`, and collect everything else into `meta`.

const post7 = { id: 1, title: "Hello", body: "World", likes: 42, tags: ["js"] };
let { id: id7, title: title7, ...meta7 } = post7;


// TODO 8: `applyConfig(userConfig)` returns a config object built from these defaults:
//           { theme: "light", lang: "en", showSidebar: true, fontSize: 14 }
//         with any provided userConfig values overriding them.
//         If userConfig is omitted, all defaults are used.

const applyConfig = (userConfig) => {
  const defaults = { theme: "light", lang: "en", showSidebar: true, fontSize: 14 };
  return {...defaults, ...userConfig};
}


// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: nested destructuring", () => {
  ok("userName",    userName,    "Jane");
  ok("userStreet",  userStreet,  "123 Pareto St");
  ok("userCountry", userCountry, "Ecuador");
});

section("TODO 2: array skip", () => {
  ok("firstColor", firstColor, "red");
  ok("thirdColor", thirdColor, "blue");
});

section("TODO 3: defaults + rename", () => {
  ok("serverPort default", serverPort, 3000);
  ok("host from config",   host,       "example.com");
});

section("TODO 4: immutable nested update", () => {
  ok("updated.address.city",  updated4.address.city,  "Madrid");
  ok("updated.address.street", updated4.address.street, "123 Pareto St");
  ok("original unchanged",    original4.address.city, "Quito");
});

section("TODO 5: sumAll", () => {
  ok("five args",  sumAll(1, 2, 3, 4, 5), 15);
  ok("no args",    sumAll(),               0);
  ok("one arg",    sumAll(10),             10);
});

section("TODO 6: merge with override", () => {
  ok("merged6", merged6, { theme: "dark", lang: "en", showSidebar: false, fontSize: 14 });
});

section("TODO 7: destructure + rest", () => {
  ok("id7",    id7,    1);
  ok("title7", title7, "Hello");
  ok("meta7",  meta7,  { body: "World", likes: 42, tags: ["js"] });
});

section("TODO 8: applyConfig", () => {
  ok("no arg",       applyConfig(),                   { theme: "light", lang: "en", showSidebar: true,  fontSize: 14 });
  ok("theme dark",   applyConfig({ theme: "dark" }),  { theme: "dark",  lang: "en", showSidebar: true,  fontSize: 14 });
  ok("multi",        applyConfig({ fontSize: 18, lang: "es" }),
                                                       { theme: "light", lang: "es", showSidebar: true,  fontSize: 18 });
});
