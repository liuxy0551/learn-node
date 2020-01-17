const http = require('http')
const url = require('url')

http.createServer((request, response) => {

  if (url.parse(request.url).query) {
    let userInfo = url.parse(request.url, true).query
    console.log(`姓名：${ userInfo.name } -- 年龄：${ userInfo.age }`)
  }


  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World!')
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081')
