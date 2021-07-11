import Head from "next/head";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tokopedia</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Category />
      </main>
      
    </div>
  );
}
