/**
 * 应用级中间件
 */

// 引入模块
const Koa = require('koa')
const router = require('koa-router')() // 引入并实例化
const app = new Koa()

// 应用级中间件 - 匹配路由之前打印当前时间，如果没有 next()，匹配到这个路由后就不会继续向下匹配路由
app.use(async (ctx, next) => {
  console.log(new Date())
  await next() // 当前路由匹配以后继续向下匹配
})

// 配置路由
// ctx 上下文 context，包含了 request 和 response 等信息
router
  .get('/', async ctx => {
    ctx.body = '首页'
  })
  .get('/news', async ctx => {
    ctx.body = '新闻列表'
  })

app
  .use(router.routes())           // 启动路由
  .use(router.allowedMethods())   // router.allowedMethods() 用在路由匹配 router.routes() 之后，所以在当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头

app.listen(9000)
console.log('请浏览器打开 http://localhost:9000 或 http://localhost:9000')
