import http from './http'

const all = () => {
  return http.get('/address_books')
}

/**
 * 获取默认地址
 */
const common = () => {
  return http.get('/address_books/common')
}

const createAddressBook = (options) => {
  return http.post(`/address_books`, options)
}

const find = (id) => {
  return http.get(`/address_books/${id}`)
}

export default { all, find, common, createAddressBook }
