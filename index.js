import { inspect } from 'util'
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
  $k[`bg_${k}`] = $c[k][1]
}
let _ = v => `\x1b[${v}m`, cl = console.log
let i = (v, d) => {
  if (d === 'inspect') return inspect(v, { depth: null })
  else if (d === 'json') return JSON.stringify(v, null, 2)
  return v
}
let u = (k, m, d) => {
  let p = k.split(' '), s = ''
  for (let v of p) {
    let x = `${_(91)}✖ logzy > key "${v}" not found ${_(35)}> log('${k}', '${m}')${_(0)}`
    if ($k[v]) s += _($k[v])
    else throw new Error(x)
  }
  return `${s}${i(m, d)}${_(0)}`
}
const log = (k, m, d) => {
  if (k && m) return cl(u(k, m, d))
  else if (k) return cl(k)
  return cl()
}
log.$ = (k, m, d) => u(k, m, d)
for (let k of Object.keys($k)) log[k] = _($k[k])
export { log }
