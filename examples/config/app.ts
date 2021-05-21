import axios from '../../src/axios'
import qs from 'qs'
import { AxiosTransformer } from '../../src/types'

axios.defaults.headers.common['test2'] = 123;
(window as any).axios = axios

axios({
  url: '/config/post',
  method: 'post',
  data: {
    a: 1,
    b: { a: 1 }
  },
  headers: {
    test: '321'
  },
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
    if (typeof data === 'object') {
      data.b = 2
    }
    return data
  }]
}).then((res) => {
  console.log(res.data)
})

// axios('/base/get', {
//   params: { a: 1, b: { a: 2 } },
//   headers: { test: '123' }
// }).then(res => console.log(res.data))
