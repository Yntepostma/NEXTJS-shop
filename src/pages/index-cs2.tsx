//Client side rendering directly from an external API

import Head from "next/head";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Title from "../../components/Title";
import { getProducts } from "../../lib/products";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("[HomePage-2]: Render");
  const [products, setProducts] = useState([]);
  console.log("products", products);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>

      <main className="px-6 py-4">
        <Title>Next Shop</Title>

        <ul>
          {products?.map((product: Product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
