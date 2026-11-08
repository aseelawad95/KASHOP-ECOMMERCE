import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstancs";

export default function UseProducts() {
  const getProducts = async () => {
     const response = await axiosInstance.get(`Products`);
   
     console.log(response.data.response.data)
    return response.data.response.data;
  };
  return useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 1,
  });
}
