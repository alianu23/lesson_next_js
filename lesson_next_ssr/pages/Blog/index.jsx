import React from "react";
import Cards from "../../components/CardSection/Cards";
import { useRouter } from "react";
import Loader from "@/components/Loader";
import { getData } from "@/utils/functions";

const AllBlogPost = ({ blogs }) => {
  const router = useRouter();

  return (
    <main>
      <div className="container mx-auto">
        <section className="flex flex-col items-center">
          <div className="flex flex-col content-start items-center">
            <h1 className="my-6 mt-7 font-bold sm:text-center ">
              All blog post
            </h1>
            <div className="grid grid-cols-1 sm:mx-20 truncate md:grid-cols-2 lg:grid-cols-3 ">
              {blogs.map((blog, i) => (
                <Cards blog={blog} />
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              const pg = number(page) + 3;
              router.replace("/page" + pg);
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
  console.log("Res", blogs);

  return {
    props: {
      blogs,
      page,
    },
  };
}
