import axios from 'axios';

const api = axios.create({
    baseURL:'localhost:3339'
})

export default api;