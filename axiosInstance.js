import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://siddstaging.smartpalika.io/",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
