import { log, u, n } from 'logzy'

/**
 * @link https://github.com/ivodolenc/logzy#Presets
 *
 * log.preset(message)
 */

// Set new preset
log.myPreset = v => console.log(u('underline', u('lime', v)) + n)

// Use custom preset
log.myPreset('My new custom preset')
