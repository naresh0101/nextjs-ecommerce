import Head from "next/head";

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()

    const paths = data?.map((curEl) => {
        return {
            params: { blogId: curEl?.id.toString() }
        }
    })
    return {
        paths, fallback: false
    }
}

// This gets called on every request
export async function getStaticProps(ctx) {
    // Fetch data from external API
    const { blogId } = ctx.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const data = await res.json()
    return { props: { data } }
}


const Detail = ({ data }) => {

    return (
        <>
            <Head>
                <title>{data?.title}</title>
                <meta name="description" content={data?.body} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mb-8 flex justify-center">
                <div className="container">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random" alt="data" />
                        <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data?.title}</h1>
                            <p className="leading-relaxed mb-3">{data?.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;