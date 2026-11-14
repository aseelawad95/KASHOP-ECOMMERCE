
import { useAuthStore } from './../Store/useAuthStore';
import axiosAuthInstance from './../api/axiosAuthInstance';
import { useQuery } from '@tanstack/react-query';


export default function useCart() {
    const token = useAuthStore((state) => state.token);
    const getCart = async () =>{
        const response = await axiosAuthInstance.get('Carts');
           return response.data;
    }

  return useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
    
}
