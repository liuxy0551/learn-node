let obj = {
  get:function () {
    console.log('从服务器获取数据')
  },
  post:function () {
    console.log('提交数据')
  }
}

// exports.obj  = obj
module.exports = obj
