import axios from 'axios';

let defaultRequestConfig = {
    baseURL: '/'
};

const defaultRestApi = axios.create(defaultRequestConfig);

defaultRestApi.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default defaultRestApi;