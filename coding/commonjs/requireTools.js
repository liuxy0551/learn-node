const http = require('http')
const tools = require('./moudle/tools')

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello World!\n')

  let api = tools.formatApi('api/plist')
  response.write(api)

  response.end()
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081')
