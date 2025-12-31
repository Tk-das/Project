import axios from "axios"
const API_URL = "http://localhost:5000/item"

export const createItem = (data)=>{
    return axios.post(API_URL,data);
}