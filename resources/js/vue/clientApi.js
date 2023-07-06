import axios from "axios";
const token = localStorage.getItem('token');

const clientApi = axios.create({
    baseURL: '/api'
})

clientApi.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

clientApi.interceptors.response.use(response => {
    console.log("Okay");
    return response
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('token')
        router.push({
            name: 'login'
        })
        console.log(401);
    } else if (error.response.status === 404) {
        router.push({
            name: 'not-found'
        })
        console.log(404);
    }
    throw error
})

export default clientApi;
