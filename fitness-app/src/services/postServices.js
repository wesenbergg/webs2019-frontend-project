import axios from 'axios'
const baseUrl = '/api/posts'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}


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
    const config = {
        headers: { Authorization: token },
    }
    
    const request = axios.post(baseUrl, newObject, config)
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


export default { getAll, getById, create, update, deleteById, setToken }