# zcc
a zero-config cli core

## install
```sh
$ npm install michaelrhodes/zcc#1.0.0
```

## use

```js
// bin.js
#!/usr/bin/env node
require('zcc')(__dirname)

// hello.js
module.exports = function (name) {
  console.log('hello, ' + name)
}
```

```sh
chmod u+x index.js
./index.js hello world
> hello, world
```

## obey
[MIT](http://opensource.org/licenses/MIT)
