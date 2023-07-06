import axios from "axios";

const token = localStorage.getItem('token');
const tokenExpiresAt = localStorage.getItem('tokenExpiresAt');

const clientApi = axios.create({
    baseURL: '/api'
})

clientApi.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

clientApi.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        const currentTime = new Date().getTime();
        if (tokenExpiresAt && currentTime > tokenExpiresAt) {
            // Token has expired, remove it from local storage
            localStorage.removeItem('token')
            localStorage.removeItem('expires_at')
            router.push({
                name: 'login'
            })
        } else {
            // Token is still valid, handle unauthorized error
            // e.g., show an error message to the user
        }
    } else if (error.response.status === 404) {
        router.push({
            name: 'not-found'
        })
    }
    throw error
})

export default clientApi;
