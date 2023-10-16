import React from "react";
import Link from "next/link";

const MediumCard = ({ blogData, key }) => {
  return (
    <Link href={"/Blog/Details/" + blogData.id}>
      <div className="mr-4 mb-5">
        <img
          src={blogData?.social_image || ""}
          alt=""
          className="lg:h-60 h-28 lg:w-[480px] w-80  mb-3"
        />
        <p className="text-[#97989F] text-base">
          {blogData.readable_publish_date}
        </p>
        <h1 className="my-3">{blogData.title}</h1>
        <p className="text-[#667085] text-base">{blogData.description}</p>
      </div>
    </Link>
  );
};

export default MediumCard;
