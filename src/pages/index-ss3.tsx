//getServerSideProps: Renders every time on runtime when the page is requested. GetStaticProps icm incremental regeneration
//preferred over getServerSideProps.

import Head from "next/head";
import { useEffect } from "react";
import { getProducts } from "../../lib/products";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Title from "../../components/Title";

const inter = Inter({ subsets: ["latin"] });

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
};

type Products = {
  products: Product[];
};

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
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
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
