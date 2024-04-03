
<h1 align="center">
	<br>
	<br>
	<img width="320" src="media/logo.svg" alt="Termic">
	<br>
	<br>
	<br>
</h1>

[![Downloads](https://badgen.net/npm/dt/termic)](https://www.npmjs.com/package/termic) 
[![NPM Version](https://img.shields.io/npm/v/termic.svg?style=flat)](https://www.npmjs.org/package/termic)
[![NPM Downloads](https://img.shields.io/npm/dm/termic.svg?style=flat)](https://npmcharts.com/compare/termic?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=termic)](https://packagephobia.now.sh/result?p=termic)
[![Npm Dependents](https://badgen.net/npm/dependents/termic)](https://www.npmjs.com/package/termic?activeTab=dependents) 

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

cli.println(styler.color.red.background.green.italic.underline("Hello World"));
```

<img src="media/example.1.png">

### Termic comes with an easy to use composable API where you just chain and nest the styles you want.

```js
const { cli, colors, styler } = require("termic");

const println = cli.println;

println("Hello World");

println(styler.background.blue.italic.underline("Hello World"));
```

<img src="media/example.2.png">

### Easily define your own themes:

```js
const { cli, colors, styler } = require("termic");

const error = styler.color.red;
const warning = styler.color.orange;

cli.println(error("Error!"));
cli.println(warning("Warning!!!"));
```

<img src="media/example.31.png">

### Animations:

```js
const fs = require("node:fs");
const termic = require("termic");

const styler = termic.styler;
const renderer = termic.renderer;
const animations = termic.animations;

const sourceFile = "example.txt";
const destFile = "example_copy.txt";

const progress_bar = renderer.progress(animations.animation1);
const progress_text = renderer.progress({ frames: ["Copying"] });
const progress_path_text = renderer.progress({ frames: [`${sourceFile} => ${destFile}`] });

const FAIL = styler.color.rgb([24, 24, 24]).background.red.bold(" FAIL ");
const DONE = styler.color.rgb([24, 24, 24]).background.green.bold(" DONE ");

fs.stat(sourceFile, function (err, stat) {
    const filesize = stat.size;
    let bytesCopied = 0;

    const readStream = fs.createReadStream(sourceFile)

    readStream.on('data', function (buffer) {
        bytesCopied += buffer.length;
        let porcentage = ((bytesCopied / filesize) * 100).toFixed(2);
        progress_bar.set(porcentage);
    });

    readStream.on('end', function () {
        progress_bar.end(DONE);
        progress_text.end(styler.color.rgb([86, 185, 127])("Copyed"));
        progress_path_text.end(styler.color.rgb([86, 185, 127])(`${sourceFile} => ${destFile}`));
    });

    readStream.on('error', function () {
        progress_bar.end(FAIL);
        progress_text.end(styler.color.red("Error"));
        progress_path_text.end(styler.color.red(`${sourceFile} => ${destFile}`));
    });

    readStream.pipe(fs.createWriteStream(destFile));
});

renderer.render([
    [styler.bold("Copying following files:")],
    [""],
    [" ", progress_bar, progress_path_text, progress_text, animations.simpleDots],
]);
```

<img src="media/example.4.gif">

### Built-in console formatter for printing functions(like println and print):

```js
const termic = require("termic");

const println = termic.cli.println;

const type_string = "Hello World!!";
const type_number = 12345;
const type_arrow_function = (bg) => { hello(); };
function type_function() { hello(); };
const type_object = {
    hello: type_arrow_function,
    hello2: {
        fw: "wfqf",
    }
}
const type_symbol = Symbol(type_string);
const type_null = null;
const type_undefined = void 0;
const type_bool = false;
const type_class = class Example {};


println(type_string);
console.log(type_string);

println(type_number);
console.log(type_number);

println(type_arrow_function);
console.log(type_arrow_function);

println(type_function);
console.log(type_function);

println(type_object);
console.log(type_object);

println(type_symbol);
console.log(type_symbol);

println(type_null);
console.log(type_null);

println(type_undefined);
console.log(type_undefined);

println(type_bool);
console.log(type_bool);

println(type_class);
console.log(type_class);

```

<img src="media/example.5.png">

## API

### termic.styler.`<style>[.<style>...](string)`

Example: `termic.styler.underline('Hello');`

Example: `termic.styler.italic('Hello');`

### termic.styler.color.`<color>[.<style>...](string)`

Example: `termic.styler.color.red.underline('Hello');`

### termic.styler.background.`<background>[.<style>...](string)`

Example: `termic.styler.background.red.underline('Hello');`

### termic.styler.color.`<rgb | hex>[.<style>...](string)`

Example: `termic.styler.color.hex('#ffffff')('Hello');`

Example: `termic.styler.color.hex('#ffffff').bold('Hello');`

Example: `termic.styler.color.rgb([255, 255, 0])('Hello');`

Example: `termic.styler.color.rgb([255, 255, 0]).bold('Hello');`

### termic.styler.background.`<rgb | hex>[.<style>...](string)`

Example: `termic.styler.background.hex('#ffffff')('Hello');`

Example: `termic.styler.background.hex('#ffffff').underline('Hello');`

Example: `termic.styler.background.rgb([255, 255, 0])('Hello');`

Example: `termic.styler.background.rgb([255, 255, 0]).underline('Hello');`

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
- `color` - Set text color
- `background` - Set background color

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

- [Universe Company](https://github.com/universe-co)