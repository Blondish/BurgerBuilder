import axios from "axios";

const instance = axios.create({
    baseURL: "https://burgerapp-5ad22-default-rtdb.europe-west1.firebasedatabase.app/"
})

export default instance