import http from './http'

/**
 * 获取所有分类
 */
const all = () => {
  return http.get('/catalogs')
}

/**
 * 获取首页类型,默认返回四个
 */
const common = () => {
  return http.get('/catalogs/common')
}

export default { all, common }
