import axios from 'axios'
const baseUrl = 'http://localhost:3001/posts'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getById = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const create = newObject => {
    const config = {
        headers: { Authorization: token },
    }
    
    const request = axios.post(baseUrl, newObject, config)
    return request.then(response => response.data)
}


const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}


const deleteById = (id) => 
    axios.delete(`${baseUrl}/${id}`)


export default { getAll, getById, create, update, deleteById }