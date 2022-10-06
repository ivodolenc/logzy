const $u = {
  amber: 33,
  black: 30,
  blue: 94,
  cyan: 96,
  gray: 90,
  green: 32,
  indigo: 34,
  lime: 92,
  magenta: 35,
  pink: 95,
  red: 31,
  rose: 91,
  silver: 37,
  sky: 36,
  white: 97,
  yellow: 93,
  'bg-amber': 43,
  'bg-black': 40,
  'bg-blue': 104,
  'bg-cyan': 106,
  'bg-gray': 100,
  'bg-green': 42,
  'bg-indigo': 44,
  'bg-lime': 102,
  'bg-magenta': 45,
  'bg-pink': 105,
  'bg-red': 41,
  'bg-rose': 101,
  'bg-silver': 47,
  'bg-sky': 46,
  'bg-white': 107,
  'bg-yellow': 103,
  bold: 1,
  crossout: 9,
  darken: 2,
  hidden: 8,
  invert: 7,
  italic: 3,
  reset: 0,
  underline: 4
}

const r = `\x1b[0m`
const n = `\n`
const logzy = v => console.log(v)
const $log = v => console.log(v)
const log = {
  $: v => console.log(v),
  n: () => console.log()
}

const u = (k, m) => {
  if ($u[k] !== undefined) return `\x1b[${$u[k]}m${m}${r}`
  return `\x1b[91m` + `✖ logzy > key not found > u(${k}, ${m})${r}`
}

for (const k in $u) log[k] = v => console.log(u(k, v))

export { logzy, $log, log, u, n, r }
