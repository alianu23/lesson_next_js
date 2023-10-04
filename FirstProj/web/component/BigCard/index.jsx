import Link from "next/link";
import React from "react";

const BigCard = ({ blogData }) => {
  return (
    <Link href={"/EachId/" + blogData.id}>
      <div>
        <div className="flex my-6 ">
          <img className=" h-60" src={blogData.social_image} alt="" />
          <div className="ml-3">
            <p className="text-[#97989F] text-base">
              {blogData.readable_publish_date}
            </p>
            <h1 className="my-3">{blogData.title}</h1>
            <p className="text-[#667085] text-base flex-wrap" href="/">
              {blogData.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
