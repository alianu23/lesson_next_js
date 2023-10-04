import { useEffect, useState } from "react";
import Cards from "./Cards";
import CardTop from "./CardTop";
import Link from "next/link";
import Loader from "@/component/Loader";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/?per_page=9");
    const data = await res.json();
    setBlogs(data);
    setIsLoading(false);
    console.log(data);
  };
  return (
    <main className="container mx-auto">
      {" "}
      <section>
        <CardTop />
      </section>
      <section className="flex flex-col items-center">
        {" "}
        <div className="flex flex-col content-start items-start">
          <h1 className="my-6 mt-32 font-semibold"> All blog post</h1>
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="grid sm:grid-cols-2  lg:grid-cols-3 ">
              {blogs.map((blog, i) => (
                <Cards blog={blog} />
              ))}
            </div>
          )}
        </div>
        <button className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75]">
          See More
        </button>
      </section>{" "}
    </main>
  );
}
