import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";

import Cards from "../../components/CardSection/Cards";

const AllBlogPost = ({ blogs, page }) => {
  const router = useRouter();
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  return (
    <main>
      <div ref={myRef} className="container mx-auto">
        <section className="flex flex-col items-center">
          <div className="flex flex-col content-start items-center">
            <h1 className="my-6 mt-7 font-bold sm:text-center ">
              All blog post
            </h1>
            <div className="grid grid-cols-1 sm:mx-20 truncate md:grid-cols-2 lg:grid-cols-3 ">
              {blogs.map((blog, i) => (
                <Cards blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              const pg = Number(page) + 3;
              router.replace("?page=" + pg);
            }}
            className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75] hover:bg-sky-700 hover:text-white"
          >
            See More
          </button>
        </section>
      </div>
      {/* )} */}
    </main>
  );
};

export default AllBlogPost;

export async function getServerSideProps(context) {
  let { page } = context.query;
  page = page || 3;
  const res = await fetch(`https://dev.to/api/articles/?per_page=${page}`);
  const blogs = await res.json();

  return {
    props: {
      blogs,
      page,
    },
  };
}
