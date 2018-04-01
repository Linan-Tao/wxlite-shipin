import http from './http'

const all = () => {
  return http.get('/address_books')
}

const createAddressBook = (options) => {
  return http.post(`/address_books`, options)
}

const find = (id) => {
  return http.get(`/address_books/${id}`)
}

export default { all, find, createAddressBook }
