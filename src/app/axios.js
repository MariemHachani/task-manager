import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://600e7b0e3bb1d100179df4d5.mockapi.io/Tasks'
});

export default instance;