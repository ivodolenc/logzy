# logzy

Modern stylizer for console log.

## Features

- Zero dependencies! Nothing! None!
- Flexible and user friendly API
- Adds life to the console log
- Ultra lightweight
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

Sets a new text color.

- `log.color(message)`

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

Sets a new background color.

- `log.bgColor(message)`

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

Sets a new text style.

- `log.style(message)`

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

A tiny utility function intended for customization. Sets a new color, background or style.

- **u** stands for **use** (use color, use style, use key, use utility etc.)
- Wraps the message with raw codes

```js
import { u } from 'logzy'

u(key, message)
```

### Keys

List of all available values for `u()` function.

- Must be set as a lowercase 'string' ('cyan', 'bg-sky', 'bold' etc.)

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

Utility constant intended for customization. Inserts a new line break.

- **n** stands for **new line**
- Provides raw new line code

```js
import { n } from 'logzy'

n
```

### Const r

Utility constant intended for special use cases. Sets a raw reset code at the end of styling.

- **r** stands for **reset**
- Provides raw reset code

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
