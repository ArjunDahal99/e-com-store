import { Product } from "@/types";

import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProduts = async (query: Query): Promise<Product[] | any> => {
  try {
    const url = queryString.stringifyUrl({
      url: URL,
      query: {
        categoryId: query.categoryId,
        colorId: query.colorId,
        sizeID: query.sizeId,
        isFeatured: query.isFeatured,
      },
    });

    const res = await fetch(url, { cache: "no-cache" });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default getProduts;
