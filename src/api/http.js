let getApiUrl = function (path) {
  return '$API_HOST/api/v1' + path;
}

let token = wx.getStorageSync('token')

const _http = (method, url, data) => {
  let header = {}
  if (token) {
    header['Authorization'] = `Bearer ${token}`
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: getApiUrl(url),
      data,
      header,
      method,
      dataType: 'json',
      success: resolve,
      fail: reject
    })
  })
}

const get = (...args) => {
  return _http('GET', ...args)
}

const put = (...args) => {
  return _http('PUT', ...args)
}

const post = (...args) => {
  return _http('POST', ...args)
}

const destroy = (...args) => {
  return _http('DELETE', ...args)
}

const setToken = (newToken) => {
  if (newToken) {
    wx.setStorage({ key: 'token', data: newToken })
    token = newToken
  } else {
    wx.removeStorageSync('token')
    token = null
  }
}

export default { setToken, get, put, post, destroy }
