# @afoot/divide

Add a lil’ divider string beneath a source string. Use it to create separation in console logs or stdout.

## usage

Provide a string and it will return the string and a divider of equal length on a separate line.

```js
const output = divide('string');
/* Returns:
string
-----
*/
console.log(output);
```

### config options

#### character

Normally returning a series of hyphens, you can specify any combination of characters with the `character` key in the config object.

```js
const output = divide('string', { character: '•–' });
/* Returns:
string
•–•–•–
*/
console.log(output);
```

#### width

Override the default string length by specifiying a numeric override with `width`.

```js
const output = divide('string', { width: 10 });
/* Returns:
string
----------
*/
console.log(output);
```

Setting `width` to less than one omits the divider

```js
const output = divide('string', { width: -1 });
/* Returns:
string
*/
console.log(output);
```

#### omitSource

Return _just_ the divider with a length equal to the input length

```js
const output = divide('string', { omitSource: true });
/* Returns:
------
*/
console.log(output);
```

### bypass input

Create a divider by passing in _only_ a config object with at least a `width`.

```js
const output = divide({ width: 5, character: '•' });
/* Returns:
•••••
*/
console.log(output);
```

## what is this for?

In honesty, I made this to test Rollup, continuous integrations, and npm packages, but it totally does what it says on the box, too!

## license

[MIT](./LICENSE) © [Matthew Smith](http://www.niftinessafoot.com)

## made with ❤️ and ☕️ by

![Niftiness Afoot!](https://gist.githubusercontent.com/niftinessafoot/2dba588395cb557293d5f09aebcd2ab0/raw/770293c76bead4f0986ff959f3ea8880017d92c0/bot.svg?sanitize=true) [Matthew Smith](https://github.com/niftinessafoot)

```

```
