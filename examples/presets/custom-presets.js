import { log, c, s, n } from 'logzy'

/**
 * Full API is listed on the repo home page.
 *
 * @link https://github.com/ivodolenc/logzy#API
 *
 * log.preset(message)
 */

// Set new preset
log.myPreset = v => console.log(s('underline', c('lime', v)) + n)

// Use custom preset
log.myPreset('My new custom preset')
