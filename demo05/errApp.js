// wwwroot 文件夹下有 images css js 以及 index.html, 找出 wwwroot 目录下所有的目录，然后放到一个数组中
// fs 内部的方法都是异步的，以下为错误示例

const fs = require('fs')
let readdirPath = './demo05/wwwroot/'

fs.readdir(readdirPath, (err, data) => {
  if (err) {
    return console.log(err)
  }

  console.log(data)
  for (let i of data) {
    if (isFile(i)) {
      data.splice(data.indexOf(i), 1)
    }
  }

  console.log(data)
})

// 判断是文件还是目录
function isFile (path) {
  fs.stat(readdirPath + path, (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    return data.isFile()
  })
}
