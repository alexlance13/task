import axios from 'axios';
require('dotenv').config();

export const options = {
  baseURL: process.env.REACT_APP_API_URL,
};
const instance = axios.create(options);

export default instance;
