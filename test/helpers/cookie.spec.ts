import cookie from '../../src/helpers/cookie'

describe('helpers:cookie', () => {
  test('should read cookies', () => {
    document.cookie = 'foo=baz&age=18&name=steve'
    expect(cookie.read('name')).toBe('steve')
  })

  test('should return null if cookie name is not exsist', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('baz')).toBeNull()
  })
})
