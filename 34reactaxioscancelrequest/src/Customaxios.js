import axios from 'axios'
const Customaxios=axios.create({
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
const cancelToken=axios.CancelToken
const source=cancelToken.source();
export default {Customaxios,source}