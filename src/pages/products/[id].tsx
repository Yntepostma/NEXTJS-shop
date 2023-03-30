import { getProduct, getProducts } from "../../../lib/products";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { Product } from "..";
import Page from "../../../components/Page";

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

type ProductPageProps = {
  product: Product;
};

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts();

  return {
    paths: products.map((product: Product) => ({
      params: {
        id: product.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  ProductPageParams
  //@ts-ignore
> = async ({ params: { id } }) => {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    return { notFound: true };
  }
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <Page title={product.title}>
      <div className="flex flex-col lg:flex-row ">
        <div>
          <Image
            className="rounded shadow"
            width={640}
            height={480}
            src={`http://localhost:1337${product.picture.url}`}
            alt={product.picture.alternativeText}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4 lg:ml-4">
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold">$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </Page>
  );
};

export default ProductPage;
