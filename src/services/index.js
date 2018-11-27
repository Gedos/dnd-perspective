import axios from 'axios';

export const db = axios.create({
  baseURL: 'http://localhost:5984/',
});

db.interceptors.response.use(res => res.data);

export default db;

