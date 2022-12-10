import Head from "next/head";
import { useContext, useEffect } from "react";
import ProductCard from "../components/productCard";
import AppContext from "../context/AppContext";


// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products`)
  const products = await res.json()

  // Pass Products to the page via props
  return { props: { products: products?.products } }
}

const Products = ({ products }) => {
  const value = useContext(AppContext)
  // const { blogs } = value.state
  const { setProducts } = value

  useEffect(() => {
    setProducts(products)
  }, [products])

  return (
    <>
      <Head>
        <title>Best 🔥 Products in market</title>
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

export default Products
