import { log, u, n } from 'logzy'

/**
 * @link https://github.com/ivodolenc/logzy#Utils
 */

log.$(u('bold', u('cyan', 'Bold + cyan text')))

log.$(u('underline', u('lime', 'Underlined + lime text')) + n + n)

console.log(u('italic', u('bg-blue', 'Italic + blue background')))
