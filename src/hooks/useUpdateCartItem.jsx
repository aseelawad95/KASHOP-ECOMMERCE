
import axiosAuthInstance from './../api/axiosAuthInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function useUpdateCartItem() {
    const queryClient = useQueryClient();
    const updateCartItem = async ({ productId, count }) => {
        const response = await axiosAuthInstance.patch(`Carts/${productId}`, { Count: count });
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
