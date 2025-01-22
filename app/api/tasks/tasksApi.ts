'use client';

import axios from 'axios';
import { config } from '../../config/index';

const taskApi = axios.create({
    baseURL: config.API_URL
});

taskApi.interceptors.request.use((config: any) => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default taskApi;