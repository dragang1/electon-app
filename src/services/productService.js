import axios from "axios";

class ProductsService {
    static getAllProducts = () => axios.get('/products');

    static getProductsByCategory = (category) => axios.get(`/products/category/${category}`)
    static getAllCaterory = () => axios.get('/products/categories')
    static getSingleProduct = (id) => axios.get(`/products/${id}`)
}

export default ProductsService;