import http from './http'

const all = () => {
  return http.get('/orders')
}

const find = (id) => {
  return http.get('/orders/' + id)
}

const createOrder = (options) => {
  return http.post(`/orders`, options)
}


export default {
  all,
  find,
  createOrder
}

