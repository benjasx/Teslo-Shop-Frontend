import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/productos.mocks";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los productos" />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={5} />
    </>
  );
};
