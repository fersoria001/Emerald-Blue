import axios from "axios"
const loginAPI = axios.create( 
    {
        baseURL: 'http://localhost:8080/login'
    }
)

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export const login = (data) => {
  const response =  loginAPI.post('', data,{
    headers: headers
  });
  return response;
}

