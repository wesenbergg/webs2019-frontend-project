import axios from 'axios'
const baseUrl = 'http://localhost:3001/'

// Yhdistetty tietokannan kanssa kommunikoiva luokka
const getAllPosts = () => {
    const request = axios.get(`${baseUrl}posts`)
    return request.then(response => response.data)
}

const getAllUsers = () => {
    const request = axios.get(`${baseUrl}users`)
    return request.then(response => response.data)
}

export default { getAllPosts, getAllUsers }