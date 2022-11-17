/**
 * All available keys that can be specified in the `Keys` array.
 *
 * Example
 *
 * ```js
 * log(['cyan', 'bold'], 'custom message...')
 * ```
 *
 * @since 2.0.0
 */
export type Keys =
  | 'amber'
  | 'bg_amber'
  | 'black'
  | 'bg_black'
  | 'blue'
  | 'bg_blue'
  | 'cyan'
  | 'bg_cyan'
  | 'gray'
  | 'bg_gray'
  | 'green'
  | 'bg_green'
  | 'indigo'
  | 'bg_indigo'
  | 'lime'
  | 'bg_lime'
  | 'magenta'
  | 'bg_magenta'
  | 'pink'
  | 'bg_pink'
  | 'red'
  | 'bg_red'
  | 'rose'
  | 'bg_rose'
  | 'silver'
  | 'bg_silver'
  | 'sky'
  | 'bg_sky'
  | 'white'
  | 'bg_white'
  | 'yellow'
  | 'bg_yellow'
  | 'bold'
  | 'crossout'
  | 'darken'
  | 'hidden'
  | 'invert'
  | 'italic'
  | 'reset'
  | 'underline'

/**
 * Available values for the `debug` mode.
 *
 * Example
 *
 * ```js
 * log(['lime', 'italic'], console, 'inspect')
 * ```
 *
 * @since 2.0.0
 */
type Debug = 'inspect' | 'json'

/**
 * @since 2.0.0
 */
type LogKeys = {
  [k in Keys]?: any
}

export interface Log extends LogKeys {
  /**
   * Custom function for stylizing console messages.
   *
   * @param keys Array of strings, accepts one or more values.
   * @param message Custom message, can be anything.
   * @param [debug] Enables debug mode for objects (optional).
   *
   * API
   *
   * ```js
   * log(keys, message, debug)
   * ```
   *
   * Example
   *
   * ```js
   * // Outputs a stylized message
   * log(['cyan'], 'custom message...')
   * log(['lime', 'bold', 'underline'], 33 * 77)
   * log(['black', 'bold', 'bg_white'], message)
   *
   * // Outputs a stylized `console` object
   * log(['cyan', 'italic'], console, 'inspect')
   *
   * // Outputs a stylized object in `json` format
   * log(['sky', 'italic', 'bold'], { a: 'b', c: 'd', e: 'f' }, 'json')
   * ```
   *
   * @since 2.0.0
   */
  (keys: Keys[], message: any, debug?: Debug): void
  /**
   * Tiny utility function designed for nesting and raw customization.
   * Basically the same as the main `log()` function but without `console.log` wrapper.
   *
   * This `log.$()` utility must be wrapped with `console.log` to actually output the styled message.
   *
   * @param keys Array of strings, accepts one or more values.
   * @param message Custom message, can be anything.
   * @param [debug] Enables debug mode for objects (optional).
   *
   * API
   *
   * ```js
   * log.$(keys, message, debug)
   *
   * console.log(log.$(['cyan', 'bold'], 'logzy is fire'))
   * ```
   *
   * Example
   *
   * ```js
   * const { $, bold, cyan, reset } = log
   *
   * console.log($(['cyan', 'bold', 'underline'], 'logzy is fire'))
   *
   * console.log(`${$(['lime', 'bold'], 'logzy')} is ${$(['rose', 'italic'], 'fire')}`)
   *
   * console.log(`${bold}${cyan}custom message...${reset}`)
   * ```
   *
   * @since 2.0.0
   */
  $(keys: Keys[], message: any, debug?: Debug): string
}

export interface ConsoleLog {
  /**
   * Shortcut for `console.log`.
   *
   * API
   *
   * ```js
   * const cl = console.log
   * ```
   *
   * Example
   *
   * ```js
   * // Prints: hello world, to stdout
   * cl('hello world');
   * ```
   *
   * @since 2.0.0
   */
  (message?: any, ...optionalParams: any[]): void
}
