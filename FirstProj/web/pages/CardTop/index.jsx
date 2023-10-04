import React, { useEffect, useState } from "react";
import MediumCard from "@/component/MediumCard";
import SmallCard from "@/component/SmallCard";
import BigCard from "@/component/BigCard";

const RecentBlog = () => {
  const [recentBlogMid, setRecentBlogMid] = useState({});
  const [recentBlogSmall, setRecentBlogSmall] = useState([]);
  const [recentBlogBig, setRecentBlogBig] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    console.log("data", data);
    setRecentBlogMid(data.shift());
    setRecentBlogSmall(data);
    console.log("jijig", recentBlogSmall);
    setRecentBlogBig(data.pop());
  };

  return (
    <div>
      <h1 className="my-5 mt-28 font-extrabold text-xl"> Recent blog posts</h1>

      <div className="flex flex-row ">
        <MediumCard blogData={recentBlogMid} />
        <SmallCard blogData={recentBlogSmall} />
      </div>
      <BigCard blogData={recentBlogBig} />
    </div>
  );
};

export default RecentBlog;
