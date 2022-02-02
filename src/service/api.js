import axios from 'axios';

const baseURL = process.env.API_URL || "http://localhost:3004";

console.log(baseURL);

const axiosAPI = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  },
});

export default axiosAPI