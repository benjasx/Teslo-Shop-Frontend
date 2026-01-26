import { tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface";

export const createUpdateProductAction = async (
  produckLike: Partial<Product> & { files?: File[] },
): Promise<Product> => {
  const { id, user, images = [], files = [], ...rest } = produckLike;

  const isCreating = id === "new";

  rest.stock = Number(rest.stock) || 0;
  rest.price = Number(rest.price) || 0;

  // Preparar las Imagenes
  if (files.length > 0) {
    const newImagesNames = await upLoadFiles(files);
    images.push(...newImagesNames);
  }

  const imagesToSave = images.map((image) => {
    if (image.includes("http")) return image.split("/").pop() || "";
    return image;
  });

  const { data } = await tesloApi<Product>({
    url: isCreating ? "/products" : `/products/${id}`,
    method: isCreating ? "POST" : "PATCH",
    data: {
      ...rest,
      images: imagesToSave,
    },
  });

  return {
    ...data,
    images: data.images.map((image) => {
      if (images.includes("http")) return image;
      return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
    }),
  };
};

export interface FileUpLoadResponse {
  secureUrl: string;
  fileName: string;
}

const upLoadFiles = async (files: File[]) => {
  const upLoadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await tesloApi<FileUpLoadResponse>({
      url: "/files/product",
      method: "POST",
      data: formData,
    });
    return data.fileName;
  });

  const uploadedFileNames = await Promise.all(upLoadPromises);
  return uploadedFileNames;
};
