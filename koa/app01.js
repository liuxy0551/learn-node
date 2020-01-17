const koa = require('koa')
let app01 = new koa()

app01.use(async ctx => {
  ctx.body = '你好 koa'
})

app01.listen(9000)
