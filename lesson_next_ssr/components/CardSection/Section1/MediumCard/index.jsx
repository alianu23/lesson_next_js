import React from "react";
import Link from "next/link";

const MediumCard = ({ blogData, key }) => {
  return (
    <Link href={"/Blog/Details/" + blogData.id}>
      <div className="lg:mr-4 mr-0 mb-5">
        <img
          src={blogData?.social_image || ""}
          alt=""
          className="lg:h-80 h-[187.5px] lg:w-[600px] w-96  mb-3"
        />
        <div className="ml-3  w-auto ">
          <p className="text-[#97989F] lg:text-xl md:text-lg text-base">
            {blogData.readable_publish_date}
          </p>
          <h1 className="lg:text-xl md:text-lg text-base my-3">
            {blogData.title}
          </h1>
          <p className="text-[#667085] lg:text-xl md:text-lg text-base">
            {blogData.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MediumCard;
