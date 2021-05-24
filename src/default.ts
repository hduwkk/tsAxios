import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/header'
import { AxiosRequestConfig } from './types'

const configs: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },
  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data)
      return transformRequest(data)
    }
  ],
  transformResponse: [
    function(data: any): any {
      return transformResponse(data)
    }
  ]
}

const methodsWithoutData = ['delete', 'get', 'head', 'options']

methodsWithoutData.forEach(method => {
  configs.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']
methodsWithData.forEach(method => {
  configs.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default configs
