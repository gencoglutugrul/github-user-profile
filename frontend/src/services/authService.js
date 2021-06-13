import axios from 'axios';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

const login = (username, password) => {
    return axios.post("/api/auth/login", { username, password })
        .then(response => {
            console.log(response)
            if (response.data.access_token) {
                localStorage.setItem("jwtToken", response.data.access_token);
                setAuthorizationToken(response.data.access_token);
            }
            return response;
        })
        .catch(err => err.response.data);
}

const checkToken = () =>{
    try{
        jwtDecode(localStorage.getItem("jwtToken"))
        return true;
    }catch(err){
        console.log(err);
        logout();
        return false;
    }
}

const logout = () => {
    localStorage.removeItem("jwtToken")
    setAuthorizationToken(false)
}

export default { login, logout, checkToken }