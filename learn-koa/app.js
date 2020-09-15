/**
 * async await
 */
async function getData () {
  return '这是一个数据'
}

async function test () {
  let p = await getData()
  console.log(p)
}

test()
