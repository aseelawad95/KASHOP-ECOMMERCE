import axios from "axios";
import { useAuthStore } from "../Store/useAuthStore";

const axiosAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    "Accept-Language": "en",
  },
});

axiosAuthInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; 
  },
  (error) => Promise.reject(error)
);

export default axiosAuthInstance;