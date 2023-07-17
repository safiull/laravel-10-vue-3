import axios from "axios";
import router from './routes'

const token = localStorage.getItem('token');
const clientApi = axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

clientApi.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        router.push('/login');
    } else if (error.response.status === 404) {
        router.push('/');
    }
    throw error;
});

export default clientApi;
