import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseProduct(id) {
  const getProduct = async () => {
    const response = await axios.get(
      `https://knowledgeshop.runasp.net/api/Products/${id}`,
      {
        headers: {
          "Accept-Language": "en",
        },
      },
     
    );
     console.log(response.data.response);
    return response.data.response;
  };
  return useQuery({
    queryKey: ["Product",id],
    queryFn: getProduct,
    staleTime: 1000 * 60 * 1,
  });
}
