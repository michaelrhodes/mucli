var fs = require('fs')
var path = require('path')

module.exports = zcc

function zcc (dir) {
  var file = process.argv[2]
  var cmd = file && path.join(dir,
    path.basename(file, path.extname(file)) + '.js'
  )

  if (!cmd || !fs.existsSync(cmd)) {
    var pkg = require(path.join(dir, 'package.json'))
    var opts = options(dir) || 'command'
    var help = pkg.name + ' <' + opts + '> [args]'
    console.error(help)
    process.exit(1)
  }

  require(cmd).apply(this, process.argv.slice(3))
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
  return path.basename(file, path.extname(file))
}
