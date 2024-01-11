import axios from "axios"

const api = axios.create({
  baseURL: "http://192.168.42.205:4444",
})
export default api
