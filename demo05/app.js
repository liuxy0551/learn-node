// wwwroot 文件夹下有 images css js 以及 index.html, 找出 wwwroot 目录下所有的目录，然后放到一个数组中
// 递归写法

const fs = require('fs')
let readdirPath = './demo05/wwwroot/'
let results = []

fs.readdir(readdirPath, (err, data) => {
  if (err) {
    return console.log(err)
  }

  (function getDir (i) {
    if (i === data.length) {
      return console.log(results)
    }

    fs.stat(readdirPath + data[i], (error, stats) => {
      if (error) {
        return console.log(error)
      }
      if (stats.isDirectory()) {
        results.push(data[i])
      }

      getDir(i + 1)
    })

  })(0)
})
