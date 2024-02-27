import axios from "axios";

export default class AuthService{

    register(values){
        return axios.post("http://localhost:4000/api/v1/"+ "auth/register",values)
    }
    login(values){
        return axios.post(process.env.REACT_APP_API+"auth/login",values)
    }


}