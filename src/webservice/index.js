import axios from "axios";

function getProducts(){
    return axios.get("http://localhost:9000/products")
}

export default{
    getProducts:getProducts
}