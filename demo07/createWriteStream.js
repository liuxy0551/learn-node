const fs = require('fs')

let str = ''
for (let i = 0; i < 5; i++) {
  str += '我是从数据库获取的数据，我要保存起来\n'
}

// 异步
let writeStream = fs.createWriteStream('./demo07/data/input.txt')
writeStream.write(str)

// 标记写入完成 / 标记文件末尾，不加 end 能写入完成，但是监听不到 finish 事件
writeStream.end()

writeStream.on('finish', () => {
  console.log('写入完成')
})
