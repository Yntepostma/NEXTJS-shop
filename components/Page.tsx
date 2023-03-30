import Head from "next/head";
import Title from "./Title";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface PageProps extends PropsWithChildren {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Next Shop</title>
      </Head>
      <nav className="flex gap-4 flex-start">
        <Link href="/">Home</Link>
        <Link href="/sign-in">Sign in</Link>
      </nav>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
};

export default Page;
