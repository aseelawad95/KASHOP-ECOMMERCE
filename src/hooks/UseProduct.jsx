import { useQuery } from "@tanstack/react-query";
import axiosInstance from './../api/axiosInstancs';

export default function UseProduct(id) {
  const getProduct = async () => {
    const response = await axiosInstance.get(`Products/${id}`);
   
     
    
     console.log(response.data.response);
    return response.data.response;
  };
  return useQuery({
    queryKey: ["Product",id],
    queryFn: getProduct,
    staleTime: 1000 * 60 * 1,
  });
}
