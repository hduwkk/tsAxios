import axios, { AxiosError } from '../../src/index'
import qs from 'qs'
/*
*  XSRF
document.cookie = 'a=b'

axios.get('/more/get').then(res => {
  console.log(res)
})

axios.post('http://127.0.0.1:8088/more/server2', {}, {
  withCredentials: true
}).then(res => {
  console.log(res)
})

const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN-D',
  xsrfHeaderName: 'X-XSRF-TOKEN-D'
})

instance.get('/more/get').then(res => {
  console.log(res)
})
*/

/*
* HTTP授权
*
* axios.post('/more/post', {
*  a: 1
* }, {
*  auth: {
*    username: 'Yee',
*    password: '123456'
*  }
* }).then(res => {
*  console.log(res)
* })
*/

/*
* 自定义参数序列化
axios.get('/more/304').then(res => {
  console.log(res, '111')
}).catch((e: AxiosError) => {
  console.log(e.message, 'something error 1')
})

axios.get('/more/304', {
  validateStatus (status) {
    return status >= 200 && status < 400
  }
}).then(res => {
  console.log(res, '222')
}).catch((e: AxiosError) => {
  console.log(e.message, 'something error 2')
})
*/

/* 自定义参数序列化
axios.get('/more/get', {
  params: new URLSearchParams('a=b&c=d')
}).then(res => {
  console.log(res)
})

axios.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['a', 'b', 'c']
  }
}).then(res => {
  console.log(res)
})

const instance = axios.create({
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

instance.get('/more/get', {
  params: {
    a: 1,
    b: 2,
    c: ['a', 'b', 'c']
  }
}).then(res => {
  console.log(res)
})
*/


/* baseURL
const instance = axios.create({
  baseURL: 'https://img.mukewang.com/'
})

instance.get('5cc01a7b0001a33718720632.jpg')

instance.get('https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg')
*/
