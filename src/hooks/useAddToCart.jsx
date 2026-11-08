import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast, Slide } from "react-toastify";
import axiosAuthInstance from "../api/axiosAuthInstance";

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Slide,
};

export default function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      console.log("mutationFn called, productId =", productId);

      const { data } = await axiosAuthInstance.post("Carts", {
        productId,
        Count: 1,
      });

      console.log("addToCart response:", data);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Added successfully", toastOptions);
    },

    onError: (error) => {
      console.error("addToCart error:", error?.response ?? error);
      toast.error(
        error?.response?.data?.message || "Something went wrong",
        toastOptions
      );
    },
  });
}