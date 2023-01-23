import axios from "axios"
import { useContext } from "react"
import Context from "../context/UserContext"



const usersAPI = axios.create( //axios devuelve un objeto
    {
        baseURL: 'http://localhost:8080/usuarios',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':localStorage.token
          }
    }
)

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}

export async function getUsers() {
    const request = await fetch('http://localhost:8080/usuarios', {
      method: 'GET',
      headers: getHeaders()
    })
    const usuarios = await request.json();
    return usuarios;
}

export const createUser = (user) => {
    usersAPI.post('', user)
}

export const deleteUser = id => usersAPI.delete('' + id)

export const updateUser = (user) => usersAPI.put('' + user.id, user)
