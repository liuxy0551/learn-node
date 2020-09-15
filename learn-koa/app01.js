// 引入模块
const koa = require('koa')
const app = new koa()

// 配置中间件
app.use(async ctx => {
  ctx.body = '你好 koa'
})

// 监听端口
app.listen(9000)
console.log('请浏览器打开 http://localhost:9000')

// 在浏览器打开 http://localhost:9000 可查看到返回的“你好 koa”
