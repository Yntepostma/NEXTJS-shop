import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/pages";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border shadow w-80 hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <Image
          src={`http://localhost:1337${product.picture.url}`}
          width={320}
          height={240}
          alt=""
        />
        <div className="flex items-baseline justify-between p-2">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span>$ {product.price.toFixed(2)}</span>
        </div>
      </Link>
    </div>
  );
}
