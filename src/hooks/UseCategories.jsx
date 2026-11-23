import { useQuery } from "@tanstack/react-query";
import axiosInstance from './../api/axiosInstancs';

export default function UseCategories() {
  const getCategories = async () => {
     const response = await axiosInstance.get(`Categories`);
      console.log("Fetched categories:", response.data.response.data); // Debugging line to check the fetched data
    return response.data.response.data;
  };
  return useQuery({
    queryKey: ["Categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 1,
  });
}
