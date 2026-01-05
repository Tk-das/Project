import axios from "axios"
const API_URL = "http://localhost:5000/item"

export const createItem = (data)=>{
    return axios.post(API_URL,data);
}

export const getAllItem = ()=>{
    return axios.get(API_URL)
}

export const updateItem = (id,data)=>{
    return axios.put(`${API_URL}/${id}`,data)
}