import axios from "axios";
import router from './routes'
const token = localStorage.getItem('token');

const clientApi = axios.create({
    baseURL: '/api'
})

clientApi.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

clientApi.interceptors.response.use(response => {
    return response
    return response
}, error => {
    console.log(error.response.status);
    if (error.response.status === 401) {
        localStorage.removeItem('token')
        router.push('/login');
    } else if (error.response.status === 404) {
        router.push('/');
    }
    throw error
})

export default clientApi;
