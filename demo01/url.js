const url = require('url')

let api = 'http://www.itying.com?name=zhangsan&age=20'

let getValue = url.parse(api, true).query

console.log(`姓名：${ getValue.name } -- 年龄：${ getValue.age }`)
