import { AxiosRequestConfig, AxiosPromise } from './tpes'
import { parseHeaders } from './helpers/header'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise(resolve => {
    const { data = null, url, method = 'get', headers, responseType } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    if (responseType) {
      request.responseType = responseType
    }
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) return
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData =
        responseType && responseType !== 'text' ? request.response : request.responseText
      console.log(request.getAllResponseHeaders())
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers['content-type']
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)
  })
}
