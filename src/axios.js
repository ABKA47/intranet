import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.50.50.32:8080/'
})

export default instance