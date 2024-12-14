import axios from 'axios';

export const API_KEY = 'f5cb0b965ea1564c50c6f1b74534d823';
export const AxiosAPI = axios.create({
  timeout: 5000,
});

export default AxiosAPI;
