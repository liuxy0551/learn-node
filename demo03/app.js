// 判断服务器上有没有 upload 目录，如果有则不做操作，反正则创建这个目录

const fs= require('fs')
let path = './demo03/upload'

// fs.stat  检测是文件还是目录
// fs.mkdir 创建目录
// fs.unlink 删除文件

fs.stat(path, (error, data) => {
  if (error) {
    return mkdirUpload()
  }

  if (data && data.isDirectory()) {
    console.log('upload 目录已存在')
  } else {
    // 先删除 upload 文件，再创建目录
    fs.unlink(path, err => {
      if (err) {
        return console.log('删除失败')
      } else {
        mkdirUpload()
      }
    })
  }
})

// 创建目录
function mkdirUpload () {
  fs.mkdir(path, err => {
    if (err) {
      return console.log(err)
    }
    console.log('upload 目录创建成功')
  })
}
