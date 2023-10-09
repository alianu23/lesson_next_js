import React from "react";
import Cards from "../../component/CardSection/Cards";
import { useState, useEffect } from "react";
import Loader from "@/component/Loader";
import { getData } from "@/utils/functions";

const AllBlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(3);

  const fetchData = async () => {
    try {
      const data = await getData(
        `https://dev.to/api/articles/?per_page=${pages}`
      );
      console.log("Data9", data);
      setBlogs(data);
    } catch (err) {
      setError("There is an error try again");
    } finally {
      setIsLoading(false);
    }
  };

  const HandleNext = () => {
    setPages(pages + 3);
  };

  useEffect(() => {
    fetchData();
  }, [pages]);

  return (
    <main>
      {isLoading && <Loader />}
      {error && (
        <h1 className="text-red-700 text-3xl text-center my-10 h-[calc(100vh-520px)] ">
          {error}
        </h1>
      )}
      {!isLoading && !error && (
        <div className="container mx-auto">
          <section className="flex flex-col items-center">
            <div className="flex flex-col content-start items-center">
              <h1 className="my-6 mt-32 font-semibold sm:text-center ">
                All blog post
              </h1>
              <div className="grid grid-cols-1 sm:mx-20  md:grid-cols-2 lg:grid-cols-3 ">
                {blogs.map((blog, i) => (
                  <Cards blog={blog} />
                ))}
              </div>
            </div>
            <button
              onClick={HandleNext}
              className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75] hover:bg-sky-700 hover:text-white"
            >
              See More
            </button>
          </section>
        </div>
      )}
    </main>
  );
};

export default AllBlogPost;
