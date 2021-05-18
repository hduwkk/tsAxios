import axios from '../../src/index'

// /base/get?a=1&b=2
const paramsA = {
  a: 1,
  b: 2
}

// /base/get?foo[]=bar&foo[]=baz
const paramsB = {
  foo: ['bar', 'baz']
}

// /base/get?foo=%7B%22bar%22:%22baz%22%7D
// foo后面是{"bar": "baz"}encode后的结果
const paramsC = {
  foo: {
    bar: 'baz'
  }
}

// /base/get?date=2019-04-01T05:55:39.030Z
const paramsD = {
  foo: new Date()
}

// 
const paramsE = {
  foo: '@:$, '
}

const arrs = [paramsA, paramsB, paramsC, paramsD, paramsE]

const btn = document.getElementById('aaa') as HTMLInputElement

document.getElementById('button').addEventListener('click', function () {
  const params = arrs[btn.value]
  if (params) {
    axios({
      method: 'get',
      url: '/simple/get',
      params: params
    })
  } else {
    alert(`不存在: (${btn.value})`)
  }
})
