// 文件服务器

let fs = require('fs'),
url = require('url'),
http = require('http'),
path = require('path')

// 从命令行参数获取root目录，默认是当前目录
let root = path.resolve(process.argv[2] || './')

console.log(root)

let server = http.createServer((request, response) => {
  // 获取url的path，类似'/css/bootstrap.css'
  let pathname = url.parse(request.url).pathname
  // 获得对应的本地文件路径，类似'/srv/www/css/bootstrap.css'
  let filepath = path.join(root, pathname)

  fs.stat(filepath, (err, stats) => {
    if (!err && stats.isFile()) {
      // 没有出错并且文件存在
      console.log('200 ' + request.url)
      response.writeHead(200)
      fs.createReadStream(filepath).pipe(response)
    } else {
      console.log('404 ' + request.url)
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

server.listen(8080)
console.log('Server is running at http://127.0.0.1:8080/')