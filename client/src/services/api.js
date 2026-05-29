import axios from "axios";

const API = axios.create({
  baseURL:
    "https://smart-grocery-inventory-manager.onrender.com/api",
});

export default API;