type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
};

const stripProduct = (product: Product) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
  };
};

const CMS_URL = process.env.CMS_URL;

const fetchJSON = async (url: string) => {
  console.log("url", URL);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`request failed: ${res.status}`);
  }
  return await res.json();
};

export const getProducts = async () => {
  const products = await fetchJSON(`${CMS_URL}products`);
  return products.map(stripProduct);
};

export const getProduct = async (id: number) => {
  const product = await fetchJSON(`${CMS_URL}products/${id}`);
  console.log("product", product);
  return product;
};
