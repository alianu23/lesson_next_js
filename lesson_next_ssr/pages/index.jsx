import { useRouter } from "next/router";
import React, { useRef, useEffect, useState } from "react";

import Cards from "../components/CardSection/Cards";
import CardTop from "../components/CardSection/Section1/CardTop";
import Layout from "@/components/Layout";

export default function Home({ blogs, page }) {
  const router = useRouter();
  const myRef = useRef(null);

  const [blogList, setBlogList] = useState(blogs);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    setBlogList(blogs);
  }, [blogs]);

  const searchBlog = (searchTitle) => {
    const findBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setBlogList(findBlogs);
  };

  return (
    <Layout setSearchTitle={searchBlog}>
      <div ref={myRef} className="container mx-auto">
        <section>
          <CardTop />
        </section>
        <section className="flex flex-col items-center">
          <div className="flex flex-col content-start ">
            <h1 className="my-5 ml-3 font-extrabold text-xl ">All blog post</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {blogList.map((blog) => (
                <Cards key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              const pg = Number(page) + 3;
              router.replace("/?page=" + pg);
            }}
            className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75] hover:bg-sky-700 hover:text-white"
          >
            See More
          </button>
        </section>
      </div>
      {/* )} */}
    </Layout>
  );
}

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
