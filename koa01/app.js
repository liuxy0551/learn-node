const koa = require('koa')
let app = new koa()

app.use(async ctx => {
  ctx.body = '你好 koa'
})

app.listen(9000)
