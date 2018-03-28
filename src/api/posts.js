import http from './http'

const all = () => {
  return http.get('/posts')
}

const top = (n) => {
  return http.get('/posts/top', { n })
}

const find = (id) => {
  return http.get(`/posts/${id}`)
}

export default { all, top, find }
