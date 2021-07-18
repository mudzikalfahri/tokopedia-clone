import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import { AnnotationIcon } from "@heroicons/react/solid";

export default function Home({products}) {

  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    const timing = setTimeout(() => {
    setLoading(false)
    }, 3000);
    return () => clearTimeout(timing)
  }, []);

  return (
    <div>
      <Head>
        <title>Tokopedia</title>
      </Head>
      { loading ? (
        <div className="w-full h-screen flex justify-center place-items-center relative">
        <div className="w-11 h-11 rounded-full animate-ping absolute translate-x-1/2 translate-y-1/2 bg-gradient-to-t from-tokped_green to-yellow-200"></div>
        <div className="w-11 h-11 rounded-full animate-bounce bg-gradient-to-b from-tokped_green to-yellow-200"></div>
      </div>
      ) : (
        <>
          <Header />
          <main className="max-w-screen-2xl mx-auto mt-32">
            <Banner />
            <Category />
            <Product products={products}/>
              <img src="https://i.ibb.co/8stXS7P/FLOATING-ICON-JANUARY-150x150.gif" className="w-24 fixed bottom-24 right-14" />  
              <div className="bg-white p-2 px-5 rounded-full flex mt-2 mr-3 fixed bottom-10 right-14 shadow-lg font-bold text-tokped_green text-lg border-t border-gray-100 cursor-pointer">
                <AnnotationIcon className="w-7 mr-2 text-tokped_green"/>
                Chat
                </div>
          </main>
          <Footer />
        </>
      )}
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
