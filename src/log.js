import { $c, c } from './colors.js'
import { $s, s } from './styles.js'
import { $p } from './presets.js'

const r = `\x1b[0m`
const n = `\n`

const logzy = v => console.log(v)
const $log = v => console.log(v)

const log = {
  $: v => console.log(v),
  n: () => console.log()
}

const l = (o, u) =>
  Object.keys(o).forEach(k => (log[k] = v => console.log(u(k, v))))

l($c, c)
l($s, s)

Object.entries($p).forEach(([k, v]) => (log[k] = d => console.log(v(d))))

export { logzy, $log, log, r, n }
