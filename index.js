const r = `\x1b[0m`,
  n = `\n`
const log = {
  $: v => console.log(v),
  n: () => console.log()
}
let $c = {
  amber: [33, 43],
  black: [30, 40],
  blue: [94, 104],
  cyan: [96, 106],
  gray: [90, 100],
  green: [32, 42],
  indigo: [34, 104],
  lime: [92, 102],
  magenta: [35, 45],
  pink: [95, 105],
  red: [31, 41],
  rose: [91, 101],
  silver: [37, 47],
  sky: [36, 46],
  white: [97, 107],
  yellow: [93, 103]
}
let $k = {
  bold: 1,
  crossout: 9,
  darken: 2,
  hidden: 8,
  invert: 7,
  italic: 3,
  reset: 0,
  underline: 4
}
for (let k of Object.keys($c)) {
  $k[k] = $c[k][0]
  $k[`bg-${k}`] = $c[k][1]
}
const u = (k, m) => {
  if ($k[k] !== undefined) return `\x1b[${$k[k]}m${m}${r}`
  return `\x1b[91m✖ logzy > key not found > u(${k}, ${m})${r}`
}
for (let k of Object.keys($k)) log[k] = v => console.log(u(k, v))
export { log, u, n, r }
