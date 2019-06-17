import axios from 'axios'
const CustomPostsAxios=axios.create({
baseURL:"https://jsonplaceholder.typicode.com",
headers:{
    "common":{
        "Authorization":"Auth Token"
    },
    "post":{
        "Content-Type":"application/json"
    }
}
});

export default CustomPostsAxios