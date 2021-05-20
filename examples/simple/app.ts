import axios from '../../src/axios'

// 目标: /base/get?a=1&b=2
axios({
  method: 'get',
  url: '/simple/get',
  params: { a: 1, b: 2 }
})
