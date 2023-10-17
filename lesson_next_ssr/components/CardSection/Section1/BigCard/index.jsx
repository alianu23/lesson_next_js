import Link from "next/link";
import React from "react";

const BigCard = ({ blogData }) => {
  return (
    <Link href={"/Blog/Details/" + blogData.id}>
      <div>
        <div className="flex my-4 lg:flex-row flex-col">
          <img
            className=" lg:h-80 h-[187.5px] lg:w-[600px] w-96  mb-3"
            src={blogData.social_image}
            alt=""
          />
          <div className="ml-3">
            <p className="text-[#97989F] lg:text-xl md:text-lg text-base">
              {blogData.readable_publish_date}
            </p>
            <h1 className="my-3 lg:text-xl md:text-lg text-base ">
              {blogData.title}
            </h1>
            <p
              className="text-[#667085] lg:text-xl md:text-lg text-base flex-wrap"
              href="/"
            >
              {blogData.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
