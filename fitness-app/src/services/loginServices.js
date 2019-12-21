import axios from 'axios'
const baseUrl = '/api/login'

//TODO: muuta postiksi kun lisäät mongo
const login = credentials => {
  const request = axios.post(baseUrl, credentials) 
  return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { login, getAll }