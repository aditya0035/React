import axios from 'axios'
axios.interceptors.request.use((request)=>{
    console.log(request)
    //here edit request config
    return request
},(error)=>{
    return Promise.reject(error);
});