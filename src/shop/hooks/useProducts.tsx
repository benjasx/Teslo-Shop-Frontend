import { useQuery } from "@tanstack/react-query";
import { getProductsActions } from "../actions/get-products.actions";

export const useProducts = () => {
  //TODO: Definir mas logica
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsActions,
  });
};
