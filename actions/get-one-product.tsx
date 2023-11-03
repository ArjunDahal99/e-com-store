import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/products/${id}`, { cache: "no-cache" });
  return res.json();
};

export default getProduct;
