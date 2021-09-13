import axios from "axios"

export const client = axios.create({
  baseURL: "http://api.alquran.cloud/v1",
  data: {},
})

// client.interceptors.response.use(res => {
//   console.log(res.data.json)
//   return res
// })
