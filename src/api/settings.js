import http from './http'

const all = () => {
  return http.get(`/wxlite_settings`)
}

export default { all}
