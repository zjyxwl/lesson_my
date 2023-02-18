import axios from './config.js'

export const getSwiper = (params) => {
    return axios.get('/carousels', params)
}