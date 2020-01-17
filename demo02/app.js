const fs = require('fs')

// stat 检测是文件还是目录
/**
 * path 判断的路径
 * callback 回调函数，传递异常参数 err 和 判断结果
 */
/*let path1 = './demo02/html/index.html'
let path2 = './demo02/html'
fs.stat(path1, (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(`是文件：${ data.isFile() }`)
  console.log(`是目录：${ data.isDirectory() }`)
})*/



// mkdir 创建目录
/**
 * path 将创建的目录路径
 * mode 目录权限（读写权限），默认 777
 * callback 回调函数，传递异常参数 err
 */
/*fs.mkdir('./demo02/css', err => {
  if (err) {
    return console.log(err)
  }
  console.log('创建成功')
})*/



// writeFile 创建写入文件，文件已存在时会覆盖
/**
 * path 将写入文件的路径
 * callback 回调函数，传递异常参数 err
 */
/*fs.writeFile('./demo02/html/fs.html', 'Hello nodejs', err => {
  if (err) {
    return console.log(err)
  }
  console.log('创建成功')
})*/


// appendFile 创建并追加文件内容
/*fs.appendFile('./demo02/css/base.css', 'body { color: red }', err => {
  if (err) {
    return console.log(err)
  }
  console.log('appendFile 成功')
})*/



// readFile 读取文件
/*fs.readFile('./demo02/html/fs.html', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(data)
  console.log(data.toString())
})*/



// readdir 读取目录
/*fs.readdir('./demo02/html', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(data)
})*/



// rename 重命名   功能：1、重命名，2、移动文件
/*fs.rename('./demo02/css/base.css', './demo02/css/index.css', err => {
  if (err) {
    return console.log(err)
  }
  console.log('重命名成功')
})*/
/*fs.rename('./demo02/html/base.css', './demo02/css/index.css', err => {
  if (err) {
    return console.log(err)
  }
  console.log('移动文件成功')
})*/



// rmdir 删除目录
// unlink 删除文件
