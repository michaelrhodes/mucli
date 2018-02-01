# zcc
a zero-config cli core

## install
```sh
$ npm install michaelrhodes/zcc#2.0.0
```

## use

```js
// bin.js
#!/usr/bin/env node
require('zcc')()

// hello.js
module.exports = function (name) {
  console.log('hello, ' + name)
}
```

```sh
chmod u+x bin.js
./bin.js hello world
> hello, world
```

### byo argument parser
```js
// bin.js
#!/usr/bin/env node
require('zcc')(require('mri'))

// hello.js
module.exports = function (args) {
  console.log('hello, ' + args.name)
}
```

```sh
chmod u+x bin.js
./bin.js hello --name world
> hello, world
```

## obey
[MIT](http://opensource.org/licenses/MIT)
