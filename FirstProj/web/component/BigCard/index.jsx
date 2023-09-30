import React from "react";

const BigCard = ({ blogData }) => {
  return (
    <div>
      <div className="flex my-6 ">
        <img className="w-96 h-60" src={blogData.social_image} alt="" />
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

export default BigCard;
