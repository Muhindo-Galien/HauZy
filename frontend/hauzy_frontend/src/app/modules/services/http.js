import axios from 'axios';
import keys from '../utils/config';

const baseURL = keys.DEFAULT_API;

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post.Accept = 'application/json';

export default axios;