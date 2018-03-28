import http from './http'

const login = (code) => {
  http.setToken(null)
  return new Promise((resolve, reject) => {
    http.get('/auth/login', { code }).then((resp) => {
      console.log('用户登陆成功')
      http.setToken(resp.data)
      resolve(resp)
    }).catch((resp) => {
      reject(resp)
    })
  })
}

const updateUserInfo = (res) => {
  return http.put('/auth/profile', res)
}

export default { login, updateUserInfo }