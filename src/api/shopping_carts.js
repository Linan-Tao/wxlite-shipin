import http from './http'

const all = () => {
  return http.get('/shopping_carts')
}

const find = (cart_ids) => {
  return http.get('/shopping_carts?ids=' + cart_ids)
}

const createShoppingCart = (product_id) => {
  return http.post(`/shopping_carts`, {product_id: product_id, amount: 1})
}

const destroyShoppingCart = (cart_id) => {
  return http.destroy(`/shopping_carts`, {
    id: cart_id
  })
}

const editShoppingCart = (options) => {
  return http.put(`/shopping_carts`, options)
}


export default {
  all,
  find,
  createShoppingCart,    
  destroyShoppingCart,
  editShoppingCart
}

