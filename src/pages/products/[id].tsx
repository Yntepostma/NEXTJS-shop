import { getProduct, getProducts } from "../../../lib/products";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { Product } from "..";
import Title from "../../../components/Title";

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
  console.log("process env", process.env.REVALIDATE_SECONDS);
  return (
    <>
      <Title>{product.title}</Title>
      <div className="flex space-x-2">
        <img
          className="ml-2 rounded"
          width={product.picture.width}
          height={product.picture.height}
          src={`http://localhost:1337${product.picture.url}`}
          alt={product.picture.alternativeText}
        />
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default ProductPage;
