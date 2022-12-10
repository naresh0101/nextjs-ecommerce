import Link from "next/link";

const BlogCard = ({ item }) => {
   
    return (
        <Link href={`/blogs/${item?.id}`} className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://source.unsplash.com/random" alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item?.title}</h1>
                    <p className="leading-relaxed mb-3">{item?.body}</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;