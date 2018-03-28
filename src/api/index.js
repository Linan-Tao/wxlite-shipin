var data = {
  // topBannerImage: 'http://www.wgtong.cn/photos/2017/10/17/263/original.?2017'
  // topBannerImage: 'http://www.wgtong.cn/ckeditor_assets/pictures/80/original_banner1.jpg'
  // topBannerImage: 'https://mall1oss-a-szzb.oss-cn-shenzhen.aliyuncs.com/images/system/kkb4Zc4mWz8mGF77G5zmD7SrJX8dPPJd.jpg'
  topBannerImage: '../images/banner.png'
}

const getTopBanner = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([data.topBannerImage]), 30)
  })
}

export default { getTopBanner }
