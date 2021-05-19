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

// axios({ method: 'post', url: '/base/post', responseType: 'json', data: paramsA }).then(res => console.log(res, paramsA))
// axios({ method: 'post', url: '/base/post', data: paramsB }).then(res => console.log(res, paramsB))
axios({ method: 'post', url: '/base/post', data: paramsC }).then(res => console.log(res, paramsC))
// axios({ method: 'post', url: '/base/post', data: paramsD }).then(res => console.log(res, paramsD))
// axios({ method: 'post', url: '/base/post', data: new URLSearchParams('q=URLUtils.searchParams&topic=api') }).then(res => console.log(res, 'URLSearchParams'))
// axios({ method: 'post', url: '/base/buffer', data: new Int32Array([21, 31]) }).then(res => console.log(res, 'Int32Array'))
