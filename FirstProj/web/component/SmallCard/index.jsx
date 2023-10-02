import React from "react";

const SmallCard = ({ blogData }) => {
  console.log("bd", blogData);
  return (
    <div className="flex flex-col">
      {blogData.map((data) => (
        <div className="flex mb-2 ">
          <img className="w-80" src={data?.social_image || ""} alt="" />
          <div className="ml-3">
            <p className="text-[#97989F] text-base">
              {data.readable_publish_date}
            </p>
            <h1 className="my-3">{data.title}</h1>
            <a className="text-[#667085] text-base flex-wrap " href="/">
              {data.description}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
