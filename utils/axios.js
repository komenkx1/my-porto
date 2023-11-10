import axios from "axios";
const baseUrl = "http://localhost:3001";
const instance = axios.create({
  baseURL: baseUrl, // Ganti dengan base URL yang sesuai
});

export { instance, baseUrl };
