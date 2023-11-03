import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/billboards/${id}`, { cache: "no-cache" });
  return res.json();
};

export default getBillboard;
