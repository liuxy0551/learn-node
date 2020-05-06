const Sequelize = require('sequelize')
const config = require('./config')

// 创建 Sequelize 对象
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

// 定义 Pet 模型，告诉 Sequelize 如何映射数据库表
const Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(50),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  timestamps: false
})


// 往数据库中添加数据
const now = Date.now()

(async () => {
  let dog = await Pet.create({
    id: 'd-' + now,
    name: 'Mary',
    gender: false,
    birth: '2008-08-09',
    createdAt: now,
    updatedAt: now,
    version: 0
  })
  console.log('created: ' + JSON.stringify(dog))
}) ()
