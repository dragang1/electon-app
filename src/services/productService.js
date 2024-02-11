import axios from "axios";

class ProductsService {

    static getAllProducts = () => axios.get('/products')
    static getAllCaterory = () => axios.get('/products/categories')

}

export default ProductsService;