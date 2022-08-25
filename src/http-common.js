import axios from "axios";

export default axios.create({
    baseURL:"https://lastingrecruitement-backend.herokuapp.com/api/v1/jobs",
    headers:{
        "Content-type":"application/json"
    }
});
