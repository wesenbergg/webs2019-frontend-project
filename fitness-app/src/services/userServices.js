import axios from 'axios'
const baseUrl = '/api/users'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const getById = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    const response = await request
    return response.data
}
const create = async newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = await request
    return response.data
}
  
const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request
    return response.data
}

const deleteById = (id) => 
    axios.delete(`${baseUrl}/${id}`)


export default { getAll, getById, create, update, deleteById }