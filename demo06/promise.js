let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let name = '张三'
    resolve(name)
  }, 1000)
})

p.then(res => {
  console.log(res)
})
