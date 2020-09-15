// 引入模块
const Koa = require('koa')
const router = require('koa-router')() // 引入并实例化
const app = new Koa()

// 配置路由
// ctx 上下文 context，包含了 request 和 response 等信息
router
  .get('/', async ctx => {
    ctx.body = '首页'
  })
  .get('/news', async ctx => {
    ctx.body = '新闻列表'
  })
  // get 传值
  .get('/newscontent', async ctx => {
     // 访问 http://localhost:9000/newscontent?aid=123&name=zhangsan
    console.log(ctx.query)
    console.log(ctx.request.query)          // { aid: '123', name: 'zhangsan' }   对象
    ctx.body = '新闻详情'
  })
  // 动态路由
  .get('/newsdetail/:id', async ctx => {
     // 访问 http://localhost:9000/newsdetail/1234
    console.log(ctx.params) // { id: 1234 }
    ctx.body = '新闻详情 - 动态路由'
  })
  // 动态路由可以传入多个值
  .get('/newsdetail/:aid/:bid', async ctx => {
     // 访问 http://localhost:9000/newsdetail/1234/5678
    console.log(ctx.params) // { aid: 1234, bid: 5678 }
    ctx.body = '新闻详情 - 动态路由 - 传入多个值'
  })

app
  .use(router.routes())           // 启动路由
  .use(router.allowedMethods())   // router.allowedMethods() 用在路由匹配 router.routes() 之后，所以在当所有路由中间件最后调用，此时根据 ctx.status 设置 response 响应头

app.listen(9000)
console.log('请浏览器打开 http://localhost:9000 或 http://localhost:9000')
