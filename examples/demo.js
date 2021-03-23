const fs = require('fs')
const path = require('path')

const result = fs.readdirSync(__dirname).reduce((entries, dir) => {
  const fullDir = path.join(__dirname, dir)
  const entry = path.join(fullDir, 'app.ts')

  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[dir] = ['webpack-hot-middleware/client', entry]
  }
  console.log(`fullDir: ${fullDir}\n entry: ${entry} \n dir: ${dir}\n `)
  return entries
}, {})

