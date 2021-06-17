import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://padariaseuzeapi.herokuapp.com'
        // baseURL: 'https://consultasmedapi.herokuapp.com/'
    }
);

export default api;
