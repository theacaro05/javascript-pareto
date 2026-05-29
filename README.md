# JavaScript Pareto Playground

A self-paced JavaScript playground focused on **the 20% of JavaScript that powers 80% of React code**. No filler. Every topic is here because you'll meet it again the moment you open a React file.

## How to use this

Each numbered folder is one topic. Open them **in order** — later modules build on earlier ones.

Inside every module you'll find three files:

| File | What it is |
|---|---|
| `1-theory.md` | Theory in plain language. Read this first. |
| `2-examples.js` | Worked examples you can run as-is to see how things behave. |
| `3-exercises.js` | Tasks marked `// TODO:` for you to implement. **Inline tests at the bottom check your work automatically.** |

### The workflow

From inside any module folder:

```sh
node 2-examples.js     # study how the syntax behaves
node 3-exercises.js    # run the tests — see which TODOs pass / fail
```

When you run `3-exercises.js`, the tests at the bottom of the file run automatically. You'll see lines like:

```
── TODO 1: clamp ──
  ✓ middle
  ✓ below min
  ✗ above max — got 15, expected 10
```

Edit the TODOs at the top of the file, re-run, watch the ✗s become ✓s.

## The roadmap

| # | Topic | Why it matters for React |
|---|---|---|
| 00 | setup | How to run a `.js` file at all |
| 01 | variables-and-types | The building blocks |
| 02 | operators | `===`, `&&`, `\|\|`, `??` — used constantly in JSX |
| 03 | conditionals | `if`/`else` and especially **ternaries** (JSX uses them everywhere) |
| 04 | functions | React components ARE functions |
| 05 | arrays | Lists of data |
| 06 | objects | Props and state are objects |
| 07 | loops | Background knowledge (React mostly iterates with `.map()`) |
| 08 | truthy-falsy | Conditional rendering gotchas |
| 09 | destructuring-and-spread | `const { name } = props`, `{ ...props }` |
| 10 | template-literals | Dynamic strings & classNames |
| 11 | array-methods | `.map()`, `.filter()`, `.find()` — the React iteration toolkit |
| 12 | modules | `import` / `export` — every React file uses these |
| 13 | async-await | Fetching data inside `useEffect` |
| 14 | react-bridge | A pretend "React component" using only plain JS — connects the dots |

## What this playground deliberately skips

To stay Pareto-honest, we skip topics you don't need for day-to-day React:

- `var` (use `let` / `const`)
- prototypes & prototype chains
- `this` binding gymnastics
- classes (modern React uses function components)
- generators, symbols, proxies, reflect
- regex deep dives
- iterator protocol

If you ever need these, you'll know — and you can learn them then.

## Prerequisites

- **Node.js 18+** (check with `node --version`). Anything 18 or newer is fine.

That's it. No `npm install` needed — there are no dependencies.

---

Start with [`00-setup/1-theory.md`](./00-setup/1-theory.md).
