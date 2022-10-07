<p align="center">
  <img src=".assets/cover.png" />
</p>

<h1 align="center">logzy</h1>
<p align="center">Modern stylizer for console log.</p>

## Features

- **Zero dependencies!** Nothing! None!
- Ultralight! Less than **1kb min**
- Flexible and user friendly API
- Adds life to the console log
- Ridiculously easy to use
- Really fast

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

### Helpers

- `log.$(message)` is a shortcut for default `console.log(message)`
- `log.n()` inserts a new line break

```js
import { log } from 'logzy'

log.$()
log.n()
```

### Text colors

- `log.color(message)`

Sets a new text color.

```js
import { log } from 'logzy'

log.amber()
log.black()
log.blue()
log.cyan()
log.gray()
log.green()
log.indigo()
log.lime()
log.magenta()
log.pink()
log.red()
log.rose()
log.silver()
log.sky()
log.white()
log.yellow()
```

### Background colors

- `log.bgColor(message)`

Sets a new background color.

```js
import { log } from 'logzy'

log.bgAmber()
log.bgBlack()
log.bgBlue()
log.bgCyan()
log.bgGray()
log.bgGreen()
log.bgIndigo()
log.bgLime()
log.bgMagenta()
log.bgPink()
log.bgRed()
log.bgRose()
log.bgSilver()
log.bgSky()
log.bgWhite()
log.bgYellow()
```

### Text Styles

- `log.style(message)`

Sets a new text style.

```js
import { log } from 'logzy'

log.bold()
log.crossout()
log.darken()
log.hidden()
log.invert()
log.italic()
log.reset()
log.underline()
```

## Utils

### Function u()

- `u(key, message)`
- **u** stands for **use** (use color, use style, use key, use utility etc.)
- Wraps the message with raw codes

A tiny utility function intended for customization. Sets a new color, background or style.

```js
import { u } from 'logzy'

u(key, message)
```

List of all available keys :

| Text Colors | Background Colors | Text Styles |
| ----------- | ----------------- | ----------- |
| amber       | bg-amber          | bold        |
| black       | bg-black          | crossout    |
| blue        | bg-blue           | darken      |
| cyan        | bg-cyan           | hidden      |
| gray        | bg-gray           | invert      |
| green       | bg-green          | italic      |
| indigo      | bg-indigo         | reset       |
| lime        | bg-lime           | underline   |
| magenta     | bg-magenta        |             |
| pink        | bg-pink           |             |
| red         | bg-red            |             |
| rose        | bg-rose           |             |
| silver      | bg-silver         |             |
| sky         | bg-sky            |             |
| white       | bg-white          |             |
| yellow      | bg-yellow         |             |

### Const n

- **n** stands for **new line**
- Provides raw new line code

Utility constant intended for customization. Inserts a new line break.

```js
import { n } from 'logzy'

n
```

### Const r

- **r** stands for **reset**
- Provides raw reset code

Utility constant intended for special use cases. Sets a raw reset code at the end of styling.

```js
import { r } from 'logzy'

r
```

## Presets

It's super easy to extend defaults and create unique custom presets.

Here are some examples:

```js
import { log, u } from 'logzy'

log.details = v => console.log(`  ${v}`)
log.info = v => console.log(u('bold', u('cyan', `> ${v}`)))
log.success = v => console.log(u('bold', u('lime', `✔ ${v}`)))
log.warn = v => console.log(u('bold', u('yellow', `! ${v}`)))
log.error = v => console.log(u('bold', u('rose', `✖ ${v}`)))

log.details('logzy is fire')
log.info('logzy is fire')
log.success('logzy is fire')
log.warn('logzy is fire')
log.error('logzy is fire')
```

## Named imports

It is possible to combine native JS import features.

Useful if you want to extend names for better readability.

```js
import { log as logzy, u as use, n as newLine } from 'logzy'

logzy.$(use('underline', use('lime', 'Underlined + lime text')) + newLine)
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
