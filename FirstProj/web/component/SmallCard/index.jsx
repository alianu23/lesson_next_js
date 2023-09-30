import React from "react";

const SmallCard = ({ blogData }) => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-2 ">
        <img src={blogData?.cover_image || ""} alt="" />
        <div className="ml-3">
          <p className="text-[#97989F] text-base">
            {blogData.readable_publish_date}
          </p>
          <h1 className="my-3">{blogData.title}</h1>
          <a className="text-[#667085] text-base flex-wrap " href="/">
            {blogData.description}
          </a>
        </div>
      </div>
      <div className="flex mb-2  ">
        <img src={blogData?.cover_image || ""} alt="" />
        <div className="ml-3">
          <p className="text-[#97989F] text-base">
            {blogData.readable_publish_date}
          </p>
          <h1 className="my-3">{blogData.title}</h1>
          <a className="text-[#667085] text-base flex-wrap" href="/">
            {blogData.description}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
