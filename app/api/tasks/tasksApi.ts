'use client';

import axios from 'axios';
import { config } from '../../config/index';

const taskApi = axios.create({
    baseURL: config.API_URL
});

export default taskApi;