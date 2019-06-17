import axios from 'axios'
const Customaxios=axios.create({
    baseURL:"https://reqres.in/api",
    headers:{
        common:{"Authorization":"Auth TOken"},
        post:{"Content-Type":"application/json"}
    }
});

export default Customaxios