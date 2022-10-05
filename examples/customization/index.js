import { log, c, s, n } from 'logzy'

/**
 * Full API is listed on the repo home page.
 *
 * @link https://github.com/ivodolenc/logzy#API
 *
 * $ replaces console.log()
 * c stands for color
 * s stands for style
 *
 * c(color, message) // Outputs: color code + message + reset code
 * s(style, message) // Outputs: style code + message + reset code
 *
 * log.$(message) // Outputs: console.log(message)
 */

log.$(s('bold', c('cyan', 'Bold + cyan text')))

log.$(s('underline', c('lime', 'Underlined + lime text')) + n + n) // n is new line

console.log(s('italic', c('bg-blue', 'Italic + blue background')))
