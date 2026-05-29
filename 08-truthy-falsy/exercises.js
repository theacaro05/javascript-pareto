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


// TODO 1: For each tricky value below, ASSIGN its Boolean() conversion.
//         Predict each first as a comment, then write the assignment.

let b_space = Boolean(" ");       // " " -> false❌, its true as "" != " " (yes the second one has a string with empty space, so in theory has something)
let b_zeroStr = Boolean("0");     // "0" -> true
let b_falseStr = Boolean("false");    // "false" -> true
let b_zero = Boolean(0);        // 0 -> false
let b_emptyArr = Boolean([]);    // [] -> true
let b_emptyObj = Boolean({});    // {} -> true
let b_NaN = Boolean(NaN);         // NaN -> true❌, its false
let b_null = Boolean(null);        // null -> false


// TODO 2: Predict the VALUE (not just true/false) of each expression. ASSIGN it.

let v1 = "" || 0 || NaN || "found";   // "" || 0 || NaN || "found" -> "found"
let v2 = "a" && "b" && "c";   // "a" && "b" && "c" -> "c"
let v3 = null && "ignored";   // null && "ignored" -> null
let v4 = null ?? undefined ?? "finally";   // null ?? undefined ?? "finally" -> "finally"
let v5 = 0 || "fallback";   // 0 || "fallback" -> "fallback"
let v6 = 0 ?? "fallback";   // 0 ?? "fallback" -> 0
let v7 = [] || "fallback";   // [] || "fallback" -> [] 
let v8 = [] && "fallback" ;   // [] && "fallback" -> "fallback"
v1
v2
v3
v4
v5
v6
v7
v8


// TODO 3: `render({ user, messages })` returns:
//           - "no user"                                  if user is null/undefined
//           - <name> + ": no messages"                   if user exists but messages.length is 0
//           - <name> + ": you have " + n + " new messages"   otherwise

const render = ({user, messages}) => {
  if (!user) return "no user";
  if (!messages.length) return user.name + ": no messages";
  return user.name + ": you have " + messages.length + " new messages";
}


// TODO 4: FIX the bug.
//         `safeBadge(count)` should return:
//           - false (not 0!)  when count is 0
//           - "(N)"           when count > 0

const safeBadge = (count) => {
  return count > 0 &&  "(" + count + ")";

}
const output = safeBadge(-4);
output;


// TODO 5: `firstError(form)` returns the name of the first MISSING field, or null.
//         Fields to check (in order): "name", "email", "pw".
//         A field is missing if its value is null, undefined, or "".

const firstError = (form) => {
  if (!form.name) return "name";
  if (!form.email) return "email";
  if (!form.pw) return"pw";
  return null;
}

// ── TESTS ─────────────────────────────────────────────────────────────

section("TODO 1: tricky Boolean conversions", () => {
  ok("Boolean(' ')",     b_space,    true);
  ok("Boolean('0')",     b_zeroStr,  true);
  ok("Boolean('false')", b_falseStr, true);
  ok("Boolean(0)",       b_zero,     false);
  ok("Boolean([])",      b_emptyArr, true);
  ok("Boolean({})",      b_emptyObj, true);
  ok("Boolean(NaN)",     b_NaN,      false);
  ok("Boolean(null)",    b_null,     false);
});

section("TODO 2: short-circuit values", () => {
  ok("'' || 0 || NaN || 'found'",       v1, "found");
  ok("'a' && 'b' && 'c'",                v2, "c");
  ok("null && 'ignored'",                v3, null);
  ok("null ?? undefined ?? 'finally'",   v4, "finally");
  ok("0 || 'fallback'",                  v5, "fallback");
  ok("0 ?? 'fallback'",                  v6, 0);
  ok("[] || 'fallback'",                 v7, []);
  ok("[] && 'fallback'",                 v8, "fallback");
});

section("TODO 3: render", () => {
  ok("no user",     render({ user: null,              messages: [] }), "no user");
  ok("undefined",   render({ user: undefined,         messages: ["a"] }), "no user");
  ok("no msgs",     render({ user: { name: "Jane" },   messages: [] }), "Jane: no messages");
  ok("3 messages",  render({ user: { name: "Grace" }, messages: ["hi","you up?","yo"] }),
                    "Grace: you have 3 new messages");
});

section("TODO 4: safeBadge", () => {
  ok("count=0  → false", safeBadge(0), false);
  ok("count=3  → (3)",   safeBadge(3), "(3)");
  ok("count=10 → (10)",  safeBadge(10), "(10)");
});

section("TODO 5: firstError", () => {
  ok("name missing",  firstError({ name: "",    email: "a@b.com", pw: "x" }), "name");
  ok("email null",    firstError({ name: "Jane", email: null,      pw: "x" }), "email");
  ok("pw empty",      firstError({ name: "Jane", email: "a@b.com", pw: ""  }), "pw");
  ok("all present",   firstError({ name: "Jane", email: "a@b.com", pw: "x" }), null);
});
