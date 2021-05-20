import axios from '../../src/axios'

interface ResponseData<T> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T> () {
  return axios<ResponseData<T>>('/extend/user').then(res => res.data).catch(err => console.error(err))
}

async function test () {
  const user = await getUser<User>()
  if (user) {
    console.log(user.result.age)
  }
}

test()

// axios({
//   url: '/extend/post',
//   method: 'post',
//   data: { msg: 'hi' }
// })

// axios('/extend/post', {
//   method: 'post',
//   data: { msg: 'hi' }
// })

// axios.request({
//   url: '/extend/post',
//   method: 'post',
//   data: { msg: 'hello' }
// })

// axios.get('/extend/get')
// axios.get('/extend/user')

// axios.options('/extend/options')

// axios.delete('/extend/delete')

// axios.head('/extend/head')

// axios.post('/extend/post', { msg: 'post' })

// axios.put('/extend/put', { msg: 'put' })

// axios.patch('/extend/patch', { msg: 'patch' })