import { useEffect, useState } from "react";
import Cards from "./Cards";
import CardTop from "./CardTop";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/?per_page=9");
    const data = await res.json();
    setBlogs(data);
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
            {blogs.map((blog, i) => (
              <Cards blog={blog} />
            ))}
          </div>
        </div>
        <button className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75]">
          See More
        </button>
      </section>{" "}
    </main>
  );
}
