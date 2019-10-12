import axios from 'axios'

import { API_ENDPOINT } from './constants'

export default function Api(request) {
    return axios.request({
        method: request.method || 'get',
        url: `${API_ENDPOINT}${request.url || "/"}`,
        data: request.data || {},
    })
}
