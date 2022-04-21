
import axios from "axios";
let token = true
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = token  ?"HEOLLOO" : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accesstoken
// console.log(TOKEN)
// const TOKEN = "HEOLLOO"

export const userReuest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `Bearer ${TOKEN}`},
})

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

