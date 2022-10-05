import { c } from './colors.js'
import { s } from './styles.js'

export const $p = {
  details: v => `  ${v}`,
  info: v => s('bold', c('cyan', `> ${v}`)),
  success: v => s('bold', c('lime', `✔ ${v}`)),
  warn: v => s('bold', c('yellow', `! ${v}`)),
  error: v => s('bold', c('rose', `✖ ${v}`)),
  details2: v => `         ${v}`,
  info2: v =>
    c('bg-cyan', c('white', ` INFO `)) + s('bold', c('cyan', ` > ${v}`)),
  success2: v =>
    c('bg-lime', c('white', ` SUCCESS `)) + s('bold', c('lime', ` > ${v}`)),
  warn2: v =>
    c('bg-yellow', c('white', ` WARN `)) + s('bold', c('yellow', ` > ${v}`)),
  error2: v =>
    c('bg-rose', c('white', ` ERROR `)) + s('bold', c('rose', ` > ${v}`))
}
