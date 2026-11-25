import { useQuery } from "@tanstack/react-query";
import axiosInstance from './../api/axiosInstancs';

export default function UseGetProductByCategory(id) {
  const getProducts = async () => {
    const response = await axiosInstance.get(`Products/category/${id}`);
   
     
    
     console.log(response.data.response);
    return response.data.response;
  };
  return useQuery({
    queryKey: ["Product",id],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 1,
  });
}
