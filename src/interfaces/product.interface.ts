import type { User } from "./user.interface";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: Gender;
  tags: string[];
  images: string[];
  user: User;
}

export type Size = "XS" | "S" | "m" | "L" | "XL" | "XXS";
export type Gender = "kid" | "men" | "Women" | "unisex";
