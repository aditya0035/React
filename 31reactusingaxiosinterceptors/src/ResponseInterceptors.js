import axios from 'axios'
axios.interceptors.response.use(response=>{
    console.log(response)
    //Here define log the response
    return response;
},(error)=>{
    console.log(error)
    //can do some logic here
    return Promise.reject(error);
});