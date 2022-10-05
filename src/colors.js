const $c = {
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
  'bg-yellow': 103
}

const c = (n, m) => {
  const cr = `\x1b[91m`
  const r = `\x1b[0m`
  const v = `\x1b[${$c[n]}m`
  const x = `${cr}✖ logzy > 'color' not found > c('${n}', ${m}) ${r}`

  if ($c[n] !== undefined) return `${v}${m}${r}`

  return x
}

export { $c, c }
