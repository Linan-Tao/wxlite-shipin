import http from './http'
// var sample = [
//   { id: 1, image: 'https://img.vanke.com/images/item/D8B5CAEEF1C942D6BFA49F1894419615.jpg', name: '金色乐府', address: '建设路东郊记忆旁', lat: 30.1972800000, lng: 103.5105300000, district: '成华区', price: 30000, tags: ['东二环', '30万客流', '万科品牌运营'], imageTag: '热销', visitsCount: 99999, followCount: 9999, visitors: [{ id: 1, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 2, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 3, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 4, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 5, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }, { id: 6, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 7, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 8, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 9, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 10, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }] },
//   { id: 2, image: 'https://img.vanke.com/images/item/CDBB866298C94F0390F3103B414CA1DE.jpg', name: '万科-天荟', address: '成都东二环杉板桥东郊记忆旁', lat: 30.6685900000, lng: 104.1232900000, district: '成华区', price: 0, tags: ['五大城市生态', '城市共同体', '城市封面建筑'], imageTag: '新品', visitsCount: 120, followCount: 10, visitors: [{ id: 1, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 2, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 3, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 4, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 5, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }, { id: 6, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 7, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 8, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 9, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 10, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }] },
//   { id: 3, image: 'https://img.vanke.com/images/item/A0781E18BE9E44179717AD2A9520A113.jpg', name: '万科玖西堂', address: '成都市羊西线与天河路交汇处北侧', district: '郫县', price: 0, tags: ['TOP系新品', '城西城墅大盘', '纯居零底商'], imageTag: '新品', visitsCount: 120, followCount: 10, visitors: [{ id: 1, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 2, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 3, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 4, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 5, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }, { id: 6, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 7, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 8, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 9, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 10, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }] },
//   { id: 4, image: 'https://img.vanke.com/images/item/D8B5CAEEF1C942D6BFA49F1894419615.jpg', name: '金色乐府', address: '建设路东郊记忆旁', district: '成华区', price: 30000, tags: ['东二环', '30万客流', '万科品牌运营'], imageTag: '热销', visitsCount: 120, followCount: 10,visitors: [{ id: 1, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 2, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 3, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 4, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 5, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }] },
//   { id: 5, image: 'https://img.vanke.com/images/item/CDBB866298C94F0390F3103B414CA1DE.jpg', name: '万科-天荟', address: '成都东二环杉板桥东郊记忆旁', district: '成华区', price: 0, tags: ['五大城市生态', '城市共同体', '城市封面建筑'], imageTag: '新品', visitsCount: 120, followCount: 10,visitors: [{ id: 1, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 2, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 3, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 4, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 5, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }] },
//   { id: 6, image: 'https://img.vanke.com/images/item/A0781E18BE9E44179717AD2A9520A113.jpg', name: '万科玖西堂', address: '成都市羊西线与天河路交汇处北侧', district: '郫县', price: 0, tags: ['TOP系新品', '城西城墅大盘', '纯居零底商'], imageTag: '新品', visitsCount: 120, followCount: 10,visitors: [{ id: 1, headshot: 'https://pic3.zhimg.com/7f5966584a3301d83ed24708d9d56aea_l.jpg' }, { id: 2, headshot: 'https://pic2.zhimg.com/6e5a78fe9_l.jpg' }, { id: 3, headshot: 'https://pic3.zhimg.com/47e67af4e15cb97d47da376d1b83cae6_l.jpg' }, { id: 4, headshot: 'https://pic3.zhimg.com/f374969469745635565a63bcd36842f6_l.jpg' }, { id: 5, headshot: 'https://pic2.zhimg.com/fe9e9e6dd_l.jpg' }] }
// ]
const catalogProduct = (type) => {
  return http.get(`/products?type=${type}`)
}

const searchProduct = (value) => {
  console.log('获取value', value)
  return http.get(`/products?search=${value}`)
}

const all = (catalodId) => {
  // return new Promise((resolve, reject) => {
  //   resolve(sample)
  // })
  if (catalodId) {
    return http.get('/products?catalog_id=' + catalodId)
  } else {
    return http.get('/products')
  }
}

const find = (id) => {
  // return new Promise((resolve, reject) => {
  //   id = parseInt(id)
  //   setTimeout(() => resolve(sample.find((h) => h.id === id)), 30)
  // })
  return http.get(`/products/${id}`)
}

export default {
  searchProduct,
  catalogProduct,
  all,
  find
}

