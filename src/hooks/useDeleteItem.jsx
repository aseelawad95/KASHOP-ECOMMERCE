import axiosAuthInstance from './../api/axiosAuthInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';



export default function useDeleteItem() {
const queryClient = useQueryClient();
    const updateCartItem = async ({ productId }) => {
        const response = await axiosAuthInstance.delete(`Carts/${productId}`,);
        return response.data;
    }
  return useMutation(
    {
        mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    }
    }
  )
}
