// wwwroot 文件夹下有 images css js 以及 index.html, 找出 wwwroot 目录下所有的目录，然后放到一个数组中

const fs = require('fs')
let readdirPath = './demo05/wwwroot/'
let results = []


// 1、定义一个 isDir 方法来判断一个资源是文件还是目录
async function isDir (path) {
  return new Promise(((resolve, reject) => {
    fs.stat(readdirPath + path, (err, data) => {
      if (err) {
        reject(err)
        return console.log(err)
      }
      if (data.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }))
}

// 2、获取 wwwroot 里面的所有资源，循环遍历
function main () {
  fs.readdir(readdirPath, async (err, data) => {
    if (err) {
      return console.log(err)
    }
    for (let i of data) {
      if (await isDir(i)) {
        results.push(i)
      }
    }

    console.log(results)
  })
}

main()
