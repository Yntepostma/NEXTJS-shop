import React from "react";
import Link from "next/link";
import { Product } from "@/pages";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="my-4 border w-80">
      <Link href={`/products/${product.id}`}>
        <img src="https://www.dummyimage.com/320x240" alt="dummy image" />
        <div className="flex justify-between p-2">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span>$ {product.price}</span>
        </div>
      </Link>
    </div>
  );
}
