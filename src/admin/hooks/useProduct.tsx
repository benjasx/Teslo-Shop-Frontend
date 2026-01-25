import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/getProductByIdAction";
import type { Product } from "@/interfaces/product.interface";

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  // TODO: mutation
  //const mutation = useMutation();

  //TODO: Por eliminar
  const handleSubmitForm = async (productLike: Product) => {
    console.log({ productLike });
  };

  return {
    ...query,
    handleSubmitForm,
  };
};
