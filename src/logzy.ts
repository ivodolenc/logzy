import type { Keys, Log, ConsoleLog } from './types'
import { inspect } from 'util'

const $keys = {
  amber: 33,
  bg_amber: 43,
  black: 30,
  bg_black: 40,
  blue: 94,
  bg_blue: 104,
  cyan: 96,
  bg_cyan: 106,
  gray: 90,
  bg_gray: 100,
  green: 32,
  bg_green: 42,
  indigo: 34,
  bg_indigo: 104,
  lime: 92,
  bg_lime: 102,
  magenta: 35,
  bg_magenta: 45,
  pink: 95,
  bg_pink: 105,
  red: 31,
  bg_red: 41,
  rose: 91,
  bg_rose: 101,
  silver: 37,
  bg_silver: 47,
  sky: 36,
  bg_sky: 46,
  white: 97,
  bg_white: 107,
  yellow: 93,
  bg_yellow: 103,
  bold: 1,
  crossout: 9,
  darken: 2,
  hidden: 8,
  invert: 7,
  italic: 3,
  reset: 0,
  underline: 4
}

const cl: ConsoleLog = console.log
let _ = (v: number) => `\x1b[${v}m`
let _d = (v: any, d?: string) => {
  if (d === 'inspect') return inspect(v, { depth: null })
  else if (d === 'json') return JSON.stringify(v, null, 2)
  return v
}
let _u = (k: string[], m: any, d?: string) => {
  let code = ''
  for (let v of k) {
    let x = `\x1b[91m✖ logzy > key "${v}" not found \x1b[35m> log([${k}], '${m}')\x1b[0m`
    let _v = v as Keys
    if ($keys[_v]) code += _($keys[_v])
    else {
      cl(_u(['rose', 'bold'], x))
      return process.exit()
    }
  }
  return `${code}${_d(m, d)}${_(0)}`
}

const log: Log = (keys: string[], message: any, debug?: string): void =>
  cl(_u(keys, message, debug))

log.$ = (keys: string[], message: any, debug?: string): string =>
  _u(keys, message, debug)

for (let k of Object.keys($keys)) {
  let _k = k as Keys
  log[_k] = _($keys[_k])
}

export { cl, log }
