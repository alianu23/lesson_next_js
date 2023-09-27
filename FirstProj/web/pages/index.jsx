import { useEffect, useState } from "react";
import Cards from "@/component/Cards";
import CardTop from "@/component/CardTop";

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
    <main>
      {" "}
      <section>
        <CardTop />
      </section>
      <section>
        {" "}
        <h1> All blog post</h1>
        <div className="grid grid-cols-3 ">
          {blogs.map((blog, i) => (
            <Cards blog={blog} />
          ))}
        </div>
      </section>{" "}
    </main>
  );
}
