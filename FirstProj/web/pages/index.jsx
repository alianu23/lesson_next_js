import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setBlogs(data);
    console.log(data);
  };
  return (
    <main>
      {" "}
      <section>
        {" "}
        <h1> All blog post</h1>
        <div className="grid grid-cols-3">
          {blogs.map((blog, i) => (
            <div className="border flex flex-col p-2">
              <img src={blog?.cover_image} alt="" />
              <div>
                <span>{blog?.type_of}</span>
                <h2>{blog.title}</h2>
                <div className="flex">
                  <img
                    className="w-6 h-6 rounded-full mr-2"
                    src={blog.user.profile_image}
                    alt=""
                  />
                  <p>{blog.user.name}</p>
                  <h4 className="text-xs">{blog.created_at}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
    </main>
  );
}
