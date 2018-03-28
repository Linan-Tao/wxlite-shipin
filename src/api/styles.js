import http from './http'

/* 所有户型 */
const all = (id) => {
  return http.get(`/styles?project_id=${id}`)
}

/* 户型筛选 */
const search = (projectId, min_size, max_size, status, address) => {
  return http.get(`/styles?project_id=${projectId}&min_size=${min_size}&max_size=${max_size}&status=${status}&address=${address}`)
}

/* 详情 */
const find = (id) => {
  return http.get(`/styles/${id}`)
}

/* 浏览记录、收藏记录 */
const type = (type) => {
  return http.get(`/styles?type=${type}`)
}

/* 收藏 */
const follow = (id) => {
  return http.post(`/styles/${id}/follow`)
}

const nextPage = (projectId, pageCount, min_size, max_size, status, address) => {
  return http.get(`/styles?project_id=${projectId}&_page=${pageCount}&min_size=${min_size}&max_size=${max_size}&status=${status}&address=${address}`)
}

export default { all, find, search, follow, type, nextPage }
