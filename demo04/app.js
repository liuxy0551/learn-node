// 判断服务器上有没有 upload 目录，如果有则不做操作，反正则创建这个目录
// mkdirp  https://www.npmjs.com/package/mkdirp

const mkdirp = require('mkdirp')
let path = './demo04/upload'

mkdirp(path, err => {
  if (err) {
    return console.error(err)
  }
  console.log('创建成功')
})
