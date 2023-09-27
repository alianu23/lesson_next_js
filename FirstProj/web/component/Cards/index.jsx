import React from "react";

const Cards = ({ blog }) => {
  return (
    <a className="border flex flex-col p-4 rounded-[15px] mr-3 mb-3">
      <img
        src={blog.cover_image ? blog.cover_image : "/unsplash.avif"}
        className="h-[200px] w-full mb-3 rounded-md"
      />
      <a>
        <span className=" bg-[#F6F8FF] rounded-md px-2 py-1 text-[#4B6BFB] text-sm">
          {<blog className="tags"></blog> ? blog.tags : "Technology"}
        </span>
        <h2 className="my-3 text-2xl font-semibold ">{blog.title}</h2>
        <div className="flex content-center items-center text-[#97989F]">
          <img
            className="w-8 h-8 rounded-full mr-2 "
            src={blog.user.profile_image}
            alt=""
          />
          <p className="text-base">{blog.user.name}</p>
          <h4 className="text-base ml-2">{blog.readable_publish_date}</h4>
        </div>
      </a>
      
    </a>
  );
};

export default Cards;
