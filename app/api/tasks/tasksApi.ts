'use client';

import axios from 'axios';

const taskApi = axios.create();

taskApi.interceptors.request.use((config: any) => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config
})

export default taskApi;