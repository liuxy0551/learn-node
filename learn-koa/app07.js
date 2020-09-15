/**
 * 中间件处理顺序 - Koa2 的洋葱模型
 */

// 引入模块
const Koa = require('koa')
const router = require('koa-router')() // 引入并实例化
const app = new Koa()

// 应用级中间件
app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(5)
})

// 应用级中间件
app.use(async (ctx, next) => {
  console.log(2)
  await next()
  console.log(4)
})

// 配置路由
// ctx 上下文 context，包含了 request 和 response 等信息
router
  .get('/', async ctx => {
    ctx.body = '首页'
  })
  .get('/news', async ctx => {
    console.log(3)
    ctx.body = '新闻列表'
  })

app
  .use(router.routes())           // 启动路由
  .use(router.allowedMethods())   // router.allowedMethods() 用在路由匹配 router.routes() 之后，所以在当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头

app.listen(9000)
console.log('请浏览器打开 http://localhost:9000 或 http://localhost:9000')
