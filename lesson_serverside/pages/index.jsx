import { useEffect, useState } from "react";

import Cards from "../components/CardSection/Cards";
import CardTop from "../components/CardSection/Section1/CardTop";
import Loader from "@/components/Loader";
import { getData } from "@/utils/functions";

export default function Home({ blogs }) {
  const [pages, setPages] = useState(3);

  // const HandleNext = () => {
  //   setPages(pages + 3);
  // };

  return (
    <main>
      {/* {isLoading && <Loader />}
      {error && (
        <h1 className="text-red-700 text-3xl text-center my-10 h-[calc(100vh-520px)] ">
          {error}
        </h1>
      )}
      {!isLoading && !error && ( */}
      <div className="container mx-auto">
        <section>
          <CardTop />
        </section>
        <section className="flex flex-col items-center">
          {" "}
          <div className="flex flex-col content-start items-center">
            <h1 className="my-6 mt-32 font-semibold sm:text-center ">
              {" "}
              All blog post
            </h1>
            <div className="grid grid-cols-1 sm:mx-20  md:grid-cols-2 lg:grid-cols-3 ">
              {" "}
              {blogs.map((blog) => (
                <Cards key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <button
            // onClick={HandleNext}
            className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75] hover:bg-sky-700 hover:text-white"
          >
            See More
          </button>
        </section>{" "}
      </div>
      {/* )} */}
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles/?per_page=9`);
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}
