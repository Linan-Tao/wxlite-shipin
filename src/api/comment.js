import http from './http'

const createComment = (e) => {
  return http.post(`/comment`, e)
  // ?name=${e.name}&sex=${e.sex}&phone=${e.phone}&content=${e.content}
}

export default { createComment }