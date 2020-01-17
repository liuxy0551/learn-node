const fs = require('fs')

// 以流的方式读取文件
let readStream = fs.createReadStream('./demo07/data/input.txt')

let str = ''
let count = 0
readStream.on('data', data => {
  str += data
  count ++
})
readStream.on('end', () => {
  console.log(str)
  console.log(count)
})
