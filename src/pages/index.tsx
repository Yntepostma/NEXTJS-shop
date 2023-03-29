import Head from "next/head";
import Link from "next/link";
import { getProducts } from "../../lib/products";
import { Inter } from "next/font/google";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";

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
    <>
      <Head>
        <title>Next Shop</title>
      </Head>

      <main className="px-6 py-4">
        <Title>Next Shop</Title>

        <ul>
          {products.map((product) => {
            return (
              <ul key={product.id}>
                <ProductCard product={product} />
              </ul>
            );
          })}
        </ul>
      </main>
    </>
  );
}
