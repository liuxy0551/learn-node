const fs = require('fs')

// 管道流，适合大文件的复制过程
let readStream = fs.createReadStream('./demo07/data/1.mp4')
let writeStream = fs.createWriteStream('./demo07/data/2.mp4')

readStream.pipe(writeStream)
