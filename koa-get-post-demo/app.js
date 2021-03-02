// 引入模块
const Koa = require('koa')
const router = require('koa-router')() // 引入并实例化
const bodyParser = require('koa-bodyparser')

// 实例化
const app = new Koa()
// 配置中间件，通过 bodyParser 获取 post 请求传递过来的参数
app.use(bodyParser())

// GET 接口
router.get('/news', ctx => {
  const { search } = ctx.query
  ctx.body = {
    time: new Date(),
    data: [
      {
        title: `新闻标题 1 - ${ search }`
      },
      {
        title: `新闻标题 2 - ${ search }`
      }
    ]
  }
})

// POST 接口
router.post('/say', ctx => {
  const { name } = ctx.request.body
  ctx.body = {
    time: new Date(),
    reply: `Hello ${ name }!`
  }
})

app.use(router.routes()) // 启动路由
app.listen(3000, () => {
  console.log('Server is running on 3000')
}) // 启动服务
