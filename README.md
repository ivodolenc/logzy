# logzy

Modern stylizer for terminal logs.

## Features

- Zero dependencies! Nothing! None! 👌
- Flexible and user friendly API 🦾
- Adds life to the console log 🥳
- Ultra lightweight 🪶
- Ridiculously easy to use 🧑‍💻
- Really fast 🚀

## Quick Start

1. Install `logzy` to your project

```sh
yarn add -D logzy # or npm i -D logzy
```

2. Import it in your project

```js
import { log } from 'logzy'

log.$('logzy is fire 🔥')
```

## Examples

Explore the [examples](examples/).

## API

### Core

```js
logzy() // Default console log
$log() // Default console log
log.$() // Default console log
log.n() // New line
```

### Text colors

```js
log.amber() // Amber text
log.black() // Black text
log.blue() // Blue text
log.cyan() // Cyan text
log.gray() // Gray text
log.green() // Green text
log.indigo() // Indigo text
log.lime() // Lime text
log.magenta() // Magenta text
log.pink() // Pink text
log.red() // Red text
log.rose() // Rose text
log.silver() // Silver text
log.sky() // Sky text
log.white() // White text
log.yellow() // Yellow text
```

### Background colors

```js
log.bgAmber() // Amber bg
log.bgBlack() // Black bg
log.bgBlue() // Blue bg
log.bgCyan() // Cyan bg
log.bgGray() // Gray bg
log.bgGreen() // Green bg
log.bgIndigo() // Indigo bg
log.bgLime() // Lime bg
log.bgMagenta() // Magenta bg
log.bgPink() // Pink bg
log.bgRed() // Red bg
log.bgRose() // Rose bg
log.bgSilver() // Silver bg
log.bgSky() // Sky bg
log.bgWhite() // White bg
log.bgYellow() // Yellow bg
```

### Text Styles

```js
log.bold() // Bold text
log.crossout() // Crossed out text
log.darken() // Darken text
log.hidden() // Hidden text
log.invert() // Inverted text
log.italic() // Italic text
log.reset() // Reset text
log.underline() // Underlined text
```

### Utils

```js
import { c, s } from 'logzy'

c(colorName, message) // Wraps the message with raw color and reset codes
s(styleName, message) // Wraps the message with raw style and reset codes
```

```js
import { n, r } from 'logzy'

n // Raw new line code
r // Raw reset code
```

### Named imports

```js
import { log as logzy, c as color, s as style, n as newLine } from 'logzy'

logzy.$(style('underline', color('lime', 'Underlined + lime text')) + newLine)
```

## Show Support

This is a free and open source project available to everyone. If you like it, `leave a star` to show your support.

### Starring a repository

Navigate to the top-right corner of the page and click the <kbd>☆ Star</kbd> button.

## License

### logzy

[MIT License](LICENSE)

Copyright © Ivo Dolenc

Developed in Croatia 🇭🇷
