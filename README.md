
<h1 align="center">
	<br>
	<br>
	<img width="320" src="media/logo.svg" alt="Termic">
	<br>
	<br>
	<br>
</h1>

[![npm dependents](https://badgen.net/npm/dependents/termic)](https://www.npmjs.com/package/termic?activeTab=dependents) [![Downloads](https://badgen.net/npm/dt/termic)](https://www.npmjs.com/package/termic)

<br>

## Highlights

- Expressive API
- Highly performant
- No dependencies
- Ability to nest styles
- [256/Truecolor color support](#256-and-truecolor-color-support)
- Auto-detects color support
- Doesn't extend `String.prototype`
- Clean and focused
- Actively maintained

## Install

```sh
npm install termic
```

## Usage

```js
const { cli, colors, styler } = require("termic");

cli.println("Hello World");

cli.println(styler.italic.underline("Hello World", colors.red, colors.green));
```

<img src="media/example.1.png">

Termic comes with an easy to use composable API where you just chain and nest the styles you want.

```js
const { cli, colors, styler } = require("termic");

const println = cli.println.bind(cli);

println("Hello World");

println(styler.italic.underline("Hello World", null, colors.blue));
```

<img src="media/example.2.png">

Easily define your own themes:

```js
const { cli, colors, styler } = require("termic");

const error = styler(null, colors.red);
const warning = styler(null, colors.orange);

cli.println(error("Error!"));
cli.println(warning("Warning!!!"));
```

<img src="media/example.31.png">

## API

### termic.styler.`<style>[.<style>...](string, textcolor<rgb[255, 255, 255]>, bgcolor<rgb[255, 255, 255]>)`

Example: `termic.styler.underline('Hello', termic.colors.red);`

Example: `termic.styler.underline('Hello', [255, 255, 255] /* white */);`

### Modifiers

- `reset` - Reset the current style.
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `italic` - Make the text italic. *(Not widely supported)*
- `underline` - Put a horizontal line below the text. *(Not widely supported)*
- `doubleline` - Put a double horizontal line below the text. *(Not widely supported)*
- `inverse`- Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `crossedout` - Puts a horizontal line through the center of the text. *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `grey`
- `orange`

## Browser support

There is currently no browser version, but we are working on it

## Windows

If you're on Windows, do yourself a favor and use [Windows Terminal](https://github.com/microsoft/terminal) instead of `cmd.exe`.

## Maintainers

- [Shakhzodbek Utkurov](https://github.com/Shahzodbek2001)