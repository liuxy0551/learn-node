const url = require('url')

let api = 'http://www.itying.com?name=zhangsan&age=20'

let getValue = url.parse(api, true).query
