import axios from "axios";
import Cookie from "js-cookie";

const api = axios.create({
    baseURL : process.env.serverUrl,
    withCredentials : true
});

api.interceptors.request.use((config) => {
    return config;
});

api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if(error.response?.status === 401){
       Cookie.remove("accessRToken")
       window.location.href="/login"
    }
    return Promise.reject(error);
});

export default api;
