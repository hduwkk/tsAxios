import axios from '../../src/index'

// /base/get?a=1&b=2
const paramsA = { a: 1, b: 2 }

// /base/get?foo[]=bar&foo[]=baz
const paramsB = { foo: ['bar', 'baz'] }

// /base/get?foo=%7B%22bar%22:%22baz%22%7D
// foo后面是{"bar": "baz"}encode后的结果
const paramsC = { foo: { bar: 'baz' } }

// /base/get?date=2019-04-01T05:55:39.030Z
const paramsD = { foo: new Date() }

const paramsE = { foo: '@:$, ' }

axios({ method: 'post', url: '/base/post', headers: { 'content-type': 'application/json; charset=utf-8' }, data: paramsA })
axios({ method: 'post', url: '/base/post', data: paramsB })
axios({ method: 'post', url: '/base/post', data: paramsC })
axios({ method: 'post', url: '/base/post', data: paramsD })
axios({ method: 'post', url: '/base/post', data: new URLSearchParams('q=URLUtils.searchParams&topic=api') })
axios({ method: 'post', url: '/base/buffer', data: new Int32Array([21, 31]) })
