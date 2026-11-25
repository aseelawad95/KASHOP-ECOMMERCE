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

export default function useAddReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, rating, comment }) => {
      const payload = {
        Rating: rating,
        Comment: comment,
      };
      console.log("addReview payload:", payload, "productId =", productId);

      const { data } = await axiosAuthInstance.post(
        `Products/${productId}/reviews`,
        payload
      );

      return data;
    },

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["product", variables.productId] });
      toast.success("Review added successfully", toastOptions);
    },

    onError: (error) => {
      const data = error?.response?.data;
      console.error("addReview validation errors:", data?.errors);

      const firstError = data?.errors
        ? Object.values(data.errors).flat()[0]
        : null;

      toast.error(
        firstError || data?.message || "Something went wrong",
        toastOptions
      );
    },
  });
}