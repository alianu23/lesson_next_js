import { useEffect, useState } from "react";
import Cards from "./Cards";
import CardTop from "./CardTop";
import Loader from "@/component/Loader";
import { getData } from "@/utils/functions";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await getData("https://dev.to/api/articles/?per_page=9");
      console.log(data);
      setBlogs(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError("There is an error try again");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      {isLoading && <Loader />}
      {error && <h1 className="text-red-700 text-3xl">{error}</h1>}
      {!isLoading && (
        <div className="container mx-auto">
          <section>
            <CardTop />
          </section>
          <section className="flex flex-col items-center">
            {" "}
            <div className="flex flex-col content-start items-start">
              <h1 className="my-6 mt-32 font-semibold"> All blog post</h1>
              <div className="grid sm:grid-cols-2  lg:grid-cols-3 ">
                {blogs.map((blog, i) => (
                  <Cards blog={blog} />
                ))}
              </div>
            </div>
            <button className="border w-auto py-2 px-3 mt-4 mb-10 rounded-md text-[#696A75]">
              See More
            </button>
          </section>{" "}
        </div>
      )}
    </main>
  );
}
