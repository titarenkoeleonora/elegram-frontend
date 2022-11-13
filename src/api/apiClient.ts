import axios from 'axios';

import { BASE_URL } from '../utils/constants';

export const apiClient = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 7000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
