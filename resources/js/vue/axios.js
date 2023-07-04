const token = localStorage.getItem('token');

const clientApi = axios.create({});

clientApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`
  return config
})

clientApi.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token')
    router.push({ name: 'login' })
  } else if (error.response.status === 404) {
    router.push({ name: 'not-found' })
  }
  throw error
})

export default clientApi
