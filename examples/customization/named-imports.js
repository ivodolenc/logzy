import { log as logzy, c as color, s as style, n as newLine } from 'logzy'

/**
 * Full API is listed on the repo home page.
 *
 * @link https://github.com/ivodolenc/logzy#API
 *
 * It's possible to combine native JS named imports.
 */

logzy.$(style('underline', color('lime', 'Underlined + lime text')) + newLine)
