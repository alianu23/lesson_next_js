import React from "react";
import Link from "next/link";

const SmallCard = ({ blogData }) => {
  console.log("bd", blogData);
  return (
    <div className="flex  flex-col  ">
      {blogData.map((data) => (
        <Link key={data.id} href={"/Blog/Details/" + data.id}>
          <div className="flex lg:flex-row md:flex-col flex-col mb-12 ">
            <img
              className="w-96 lg:w-64 "
              src={data?.social_image || ""}
              alt=""
            />
            <div className="ml-3 lg:w-96 w-auto ">
              <p className="text-[#97989F] text-base">
                {data.readable_publish_date}
              </p>
              <h1 className="my-3">{data.title}</h1>
              <p className="text-[#667085] text-base flex-wrap " href="/">
                {data.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SmallCard;
