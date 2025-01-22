'use client';

import axios from 'axios';
import { config } from '../../config/index';

const usersApi = axios.create({
    baseURL: config.API_URL
});

export default usersApi;