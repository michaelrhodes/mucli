# zcc
a zero-config cli core

## install
```sh
$ npm install michaelrhodes/zcc#2.1.1
```

## use
```sh
chmod u+x bin.js
./bin.js hello world
> hello, world
```
```js
// bin.js
#!/usr/bin/env node
require('zcc')()

// hello.js
module.exports = function (name) {
  console.log('hello, ' + name)
}
```

### byo argument parser
```sh
chmod u+x bin.js
./bin.js hello --name world
> hello, world
```
```js
// bin.js
#!/usr/bin/env node
require('zcc')(require('mri'))

// hello.js
module.exports = function (args) {
  console.log('hello, ' + args.name)
}
```

## obey
[MIT](http://opensource.org/licenses/MIT)
