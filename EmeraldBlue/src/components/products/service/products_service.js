import axios from "axios"

const productsAPI = axios.create( //axios devuelve un objeto
    {
        baseURL: 'http://localhost:3000/products'
    }
)

export const getProducts = async() => {
    const response = await productsAPI.get('/')
    return response.data;
}

export const createProduct = (product) => {
    productsAPI.post('/', product)
}

export const deleteProduct = id => productsAPI.delete('/' + id)

export const updateProduct = (product) => productsAPI.put('/' + product.id, product)
