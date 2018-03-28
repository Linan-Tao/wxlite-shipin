import http from './http'

const all = () => {
  return http.get('/shopping_carts')
}

const createShoppingCart = (product_id) => {
  return http.post(`/shopping_carts`, {product_id: product_id, amount: 1})
}

const destroyShoppingCart = (cart_id) => {
  return http.destroy(`/shopping_carts`, {
    id: cart_id
  })
}


export default {
  all,
  createShoppingCart,
  destroyShoppingCart
}

