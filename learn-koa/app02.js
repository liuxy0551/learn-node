// 引入模块
const Koa = require('koa')
const Router = require('koa-router')

// 实例化
let app02 = new Koa()
let router = new Router()

// 配置路由
// ctx 上下文 context，包含了 request 和 response 等信息
router
  .get('/', async ctx => {
    ctx.body = '首页'
  })
  .get('/news', async ctx => {
    ctx.body = '新闻'
  })

app02
  .use(router.routes())           // 启动路由
  .use(router.allowedMethods())   // router.allowedMethods() 用在路由匹配 router.routes() 之后，所以在当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头

app02.listen(9000)

