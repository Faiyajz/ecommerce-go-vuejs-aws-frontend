import axios from "axios";

function getProducts(){
    return axios.get("http://localhost:9000/products")
}

function getCategories(){
    return axios.get("http://localhost:9000/categories")
}

export default{
    getProducts:getProducts,
    getCategories:getCategories
}