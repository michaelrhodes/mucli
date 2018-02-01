var fs = require('fs')
var path = require('path')

module.exports = zcc

function zcc (parse) {
  var file = process.argv[2]

  var dir = module.parent &&
    path.dirname(module.parent.filename)

  var cmd = file && dir &&
    path.join(dir, basename(file) + '.js')

  if (!cmd || !fs.existsSync(cmd)) {
    var pkg = require(path.join(dir, 'package.json'))
    var opts = options(dir) || 'command'
    var help = pkg.name + ' <' + opts + '> [args]'
    console.error(help)
    process.exit(1)
  }


  var fn = require(cmd)
  var args = process.argv.slice(3)
  typeof parse == 'function' ?
    fn.call(this, parse(args)) :
    fn.apply(this, args)
}

function options (dir) {
  return fs.readdirSync(dir)
    .filter(command)
    .map(basename)
    .join('|')
}

function command (file) {
  return /.js$/.test(file) &&
    file !== 'index.js' &&
    file !== 'bin.js'
}

function basename (file) {
  return path.basename(file,
    path.extname(file)
  )
}
