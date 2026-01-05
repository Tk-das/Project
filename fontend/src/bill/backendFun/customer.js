import axios from "axios"
const API_URL = "http://localhost:5000/customer"

export const createCustomer = (data)=>{
    return axios.post(API_URL,data);
}

export const getAllCustomer = ()=>{
    return axios.get(API_URL)
}

export const updateCustomer = (id,data)=>{
    return axios.put(`${API_URL}/${id}`,data)
}