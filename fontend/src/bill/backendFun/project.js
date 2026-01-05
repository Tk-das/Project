import axios from "axios"
const API_URL = "http://localhost:5000/project"

export const createProject = (data)=>{
    return axios.post(API_URL,data);
}

export const getAllProject = ()=>{
    return axios.get(API_URL)
}

export const updateProject = (id,data)=>{
    return axios.put(`${API_URL}/${id}`,data)
}