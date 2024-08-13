import axios from "axios"; 

const celsiaApi = axios.create({ 
    baseURL: "http://localhost:5000",
    // headers: {
    //     'x-token': localStorage.getItem('token')
    // }
    //process.env.VITE_API_URL,

});

//Interceptors

celsiaApi.interceptors.request.use(config=>{

    config.headers = {
        ...config.headers,
        // 'x-token': localStorage.getItem('token'),

    }
    

    return config;
})

export default celsiaApi;