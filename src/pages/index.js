import Head from "next/head";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Home({products}) {

  return (
    <div>
      <Head>
        <title>Tokopedia</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto mt-32">
        <Banner />
        <Category />
        <Product products={products}/>
      </main>
      
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products/').then(
    (res) => res.json());
    return { props: {
      products: products,
    } };
}
