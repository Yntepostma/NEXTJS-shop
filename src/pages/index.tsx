import Head from "next/head";
import Link from "next/link";
import { getProducts } from "../../lib/products";
import { Inter } from "next/font/google";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import Page from "../../components/Page";

const inter = Inter({ subsets: ["latin"] });

export type Product = {
  id: number | string;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  picture: {
    alternativeText: string;
    caption: string;
    id: number;
    url: string;
    width: number;
    height: number;
  };
};

type Products = {
  products: Product[];
};

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 30,
  };
}

export default function Home({ products }: Products) {
  console.log("[HomePage]: Render");
  console.log("products", products);
  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </Page>
  );
}
