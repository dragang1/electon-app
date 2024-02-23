import axios from "axios";

class ProductsService {
    static getAllProducts = () => axios.get('/products');
    static getProductBySearch = (search) => axios.get(`https://dummyjson.com/products/search?q=${search}`)

    static getProductsByCategory = (category) => axios.get(`/products/category/${category}`)
    static getAllCaterory = () => axios.get('/products/categories')
    static getSingleProduct = (id) => axios.get(`/products/${id}`)
}

export default ProductsService;