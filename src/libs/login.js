import wepy from 'wepy'
import AuthAPI from '../api/auth'

const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: (res) => {
        if (res.code) {
          AuthAPI.login(res.code).then((res) => {
            wepy.getUserInfo({
              withCredentials: true,
              success: (e) => {
                AuthAPI.updateUserInfo(e)
                resolve()
              },
              fail: (e) => {
                wepy.showModal({
                  title: '警告',
                  content: '您点击了拒绝授权，影响到了某些功能体验。请10分钟后再次点击授权，或者删除小程序重新进入。',
                  success: (res) => {
                    if (res.confirm) {
                      console.log('用户取消授权')
                      resolve()
                    }
                  }
                })
              }
            })
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
          reject()
        }
      },
      fail: (error) => {
        wx.showModal({
          title: '警告',
          content: '用户登陆不成功，是否重新登陆',
          success: (e) => {
            if (e.confirm) {
              login()
              resolve()
            } else {
              wx.showModal({
                title: '温馨提示!',
                content: '无法预览楼盘信息，请检查网络'
              })
            }
          }
        })
      }
    })
  })
}

export {
  login
}
