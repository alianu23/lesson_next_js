import React from "react";

const MediumCard = ({ blogData, key }) => {
  return (
    <div className="mr-4">
      <img src={blogData?.social_image || ""} alt="" className="h-60 w-96" />
      <p className="text-[#97989F] text-base">
        {blogData.readable_publish_date}
      </p>
      <h1 className="my-3">{blogData.title}</h1>
      <a href="/" className="text-[#667085] text-base">
        {blogData.description}
      </a>
    </div>
  );
};

export default MediumCard;
