import React from "react";
import Link from "next/link";

const Cards = ({ blog }) => {
  return (
    <Link href={"/Blog/Details/" + blog.id}>
      <div className="border flex flex-col p-4 rounded-[15px] mr-3 mb-3 ">
        <img
          src={blog.cover_image ? blog.cover_image : "/Noimg/unsplash.avif"}
          className="h-[200px] w-full mb-3 rounded-md"
        />
        <div>
          <span className=" bg-[#F6F8FF] truncate rounded-md px-2 py-1 text-[#4B6BFB] text-sm">
            {<blog className="tags"></blog> ? blog.tags : "Technology"}
          </span>
          <h2 className="my-3 text-2xl font-semibold truncate hover:">
            {blog.title}
          </h2>
          <div className="flex content-center items-center text-[#97989F]">
            <img
              className="w-8 h-8 rounded-full mr-2 "
              src={blog.user.profile_image}
              alt=""
            />
            <p className="text-base">{blog.user.name}</p>
            <h4 className="text-base ml-2">{blog.readable_publish_date}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
