import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:5000/api/',
    // baseURL: 'https://map-refugee.herokuapp.com/api/',
})
Axios.interceptors.request.use((request) => {
    // document.querySelector('.overlay').style.display = 'block'
    return request
})

Axios.interceptors.response.use(response => {
    document.querySelector('.overlay').style.display = 'none'
    return response
})

export default Axios
