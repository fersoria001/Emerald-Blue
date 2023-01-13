import axios from "axios"

const productsAPI = axios.create( //axios devuelve un objeto
    {
        baseURL: 'http://localhost:3000/products'
    }
)

export const getProducts = async()  => {
    const response = await productsAPI.get('/')
    return response.data;
}

export const getProductsByName = async(query) => {
    const response = await productsAPI.get('/?name=' + query)
    return response.data;
}

export const getProductPage = async(page) =>{
    const response = await productsAPI.get(`?_page=${page}&_limit=2`)
    return response.data
}
export const createProduct = (product) => {
    productsAPI.post('/', product)
}

export const deleteProduct = id => productsAPI.delete('/' + id)

export const updateProduct = (product) => productsAPI.put('/' + product.id, product)
