import React, { useEffect, useState } from "react";
import MediumCard from "@/components/CardSection/Section1/MediumCard";
import SmallCard from "@/components/CardSection/Section1/SmallCard";
import BigCard from "@/components/CardSection/Section1/BigCard";
import { getData } from "@/utils/functions";
import Link from "next/link";

const RecentBlog = () => {
  const [recentBlogMid, setRecentBlogMid] = useState({});
  const [recentBlogSmall, setRecentBlogSmall] = useState([]);
  const [recentBlogBig, setRecentBlogBig] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData("https://dev.to/api/articles/latest?per_page=4");
    console.log("data", data);
    setRecentBlogMid(data.shift());
    setRecentBlogSmall(data);
    console.log("jijig", recentBlogSmall);
    setRecentBlogBig(data.pop());
  };

  return (
    <div>
      <h1 className="my-5 mt-28 font-extrabold text-xl"> Recent blog posts</h1>

      <div className="flex flex-col sm:flex-row">
        <MediumCard blogData={recentBlogMid} />
        <SmallCard blogData={recentBlogSmall} />
      </div>
      <BigCard blogData={recentBlogBig} />
    </div>
  );
};

export default RecentBlog;
