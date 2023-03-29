import { getProducts } from "../../../lib/products";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  product: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const products = await getProducts();
  res.status(200).json(products);
};

export default handler;
