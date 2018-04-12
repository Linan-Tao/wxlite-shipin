import http from './http'

const all = (options) => {
  if (options.status) {
    return http.get('/orders?status=' + options.status)
  } else {
    return http.get('/orders')
  }
}

const find = (id) => {
  return http.get('/orders/' + id)
}

const createOrder = (options) => {
  return http.post(`/orders`, options)
}

const cancelOrder = (id) => {
  return http.post(`/orders/${id}/cancel`)
}

const chargeOrder = (id) => {
  return http.post(`/orders/${id}/charge`)
}


export default {
  all,
  find,
  createOrder,
  chargeOrder,
  cancelOrder
}

