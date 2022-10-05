const $s = {
  bold: 1,
  crossout: 9,
  darken: 2,
  hidden: 8,
  invert: 7,
  italic: 3,
  reset: 0,
  underline: 4
}

const s = (n, m) => {
  const r = `\x1b[0m`
  const v = `\x1b[${$s[n]}m`
  const cr = `\x1b[91m`
  const x = `${cr}✖ logzy > 'style' not found > c('${n}', ${m}) ${r}`

  if ($s[n] !== undefined) return `${v}${m}${r}`

  return x
}

export { $s, s }
