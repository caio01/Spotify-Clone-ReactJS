import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gist.githubusercontent.com/caio01/0203fac18d47f333f749c49df124702e/raw/180d734fa0ffbeb9e56930990beb558bea089275/data.json'
});

export default api;