import axios from 'axios';

//const baseURL = process.env.API_URL;
const baseURL = 'https://localhost:5001/api/'

const axiosAPI = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  },
});

export default axiosAPI