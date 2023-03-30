import { fetchJSON } from "./api";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  picture: string;
};

const { CMS_URL } = process.env;

const stripProduct = (product: Product) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    picture: product.picture,
  };
};

export const getProducts = async () => {
  const products = await fetchJSON(`http:/localhost:1337/products`);
  return products.map(stripProduct);
};

export const getProduct = async (id: number) => {
  const product = await fetchJSON(`http:/localhost:1337/products/${id}`);
  return product;
};
