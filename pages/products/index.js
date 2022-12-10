import Head from "next/head";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import AppContext from "../../context/AppContext";

const Blogs = () => {
  const value = useContext(AppContext)
  const { products } = value.state
  // const { setBlogs } = value

  return (
    <>
      <Head>
        <title>Read All Latest Products</title>
        <meta name="description" content="Top blogs in world demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              products?.map((item, i) => {
                return <ProductCard item={item} key={i} />
              })
            }

          </div>
        </div>
      </section>
    </>
  )
}


export default Blogs