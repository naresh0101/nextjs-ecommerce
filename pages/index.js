import Head from "next/head";
import { useContext, useEffect } from "react";
import BlogCard from "../components/blogCard";
import AppContext from "../context/AppContext";


// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const blogs = await res.json()

  // Pass blogs to the page via props
  return { props: { blogs } }
}

const Blogs = (props) => {
  const value = useContext(AppContext)
  // const { blogs } = value.state
  const { setBlogs } = value

  useEffect(() => {
    setBlogs(props?.blogs)
  }, [])

  return (
    <>
      <Head>
        <title>Read All Latest Blogs</title>
        <meta name="description" content="Top blogs in world demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              props?.blogs?.map((item, i) => {
                return <BlogCard item={item} key={i} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
