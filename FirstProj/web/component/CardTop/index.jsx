import React from "react";

const CardTop = () => {
  return (
    <div >
      <h1 className="my-5 mt-28 font-semibold"> Recent blog posts</h1>
      
      <div className="flex flex-row">
        <div className="mr-4">
        <img src="/unsplash.avif" alt="" className="h-60 w-96" />
        <p className="text-[#97989F] text-base">August 22, 2022</p>
        <h1 className="my-3">UX review presentations</h1>
        <a href="/" className="text-[#667085] text-base">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </a>
        </div>
        <div className="flex flex-col">
        <div className="flex mb-2 ">
          <img src="/Image.png" alt="" />
          <div className="ml-3">
          <p className="text-[#97989F] text-base">August 22, 2022</p>
          <h1 className="my-3">Migrating to Linear 101</h1>
          <a className="text-[#667085] text-base flex-wrap " href="/">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</a>
          </div>
        </div>
        <div className="flex mb-2  ">
          <img src="/Image.png" alt="" />
          <div className="ml-3">
          <p className="text-[#97989F] text-base">August 22, 2022</p>
          <h1 className="my-3">Migrating to Linear 101</h1>
          <a className="text-[#667085] text-base flex-wrap" href="/">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</a>
          </div>
        </div>
        </div>
      </div>
      <div>
      <div className="flex my-6 ">
          <img className="w-96 h-60" src="/Image.png" alt="" />
          <div className="ml-3">
          <p className="text-[#97989F] text-base">August 22, 2022</p>
          <h1 className="my-3">Grid system for better Design User Interface</h1>
          <a className="text-[#667085] text-base flex-wrap" href="/">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTop;
