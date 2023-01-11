import axios from "axios"

const usersAPI = axios.create( //axios devuelve un objeto
    {
        baseURL: 'http://localhost:3000/users'
    }
)

export const getUsers = async() => {
    const response = await usersAPI.get('/')
    return response.data;
}

export const createUser = (user) => {
    usersAPI.post('/', user)
}

export const deleteUser = id => usersAPI.delete('/' + id)

export const updateUser = (user) => usersAPI.put('/' + user.id, user)
