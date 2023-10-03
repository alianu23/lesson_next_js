import React from "react";

const ErrorPage = () => {
  return (
    <div className="container mx-auto flex content-center items-center w-[450px] h-96">
      <div>
        <h1 className="text-7xl mr-5 pr-12">404</h1>
      </div>
      <div className="flex flex-col border-l-[1px] pl-12">
        <h3 className="text-2xl font-['Work-sans']">Page Not Found</h3>
        <p className="text-lg text-gray-500 font-['Work-sans'] my-4">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <a
          href="/"
          className=" font-['Work-Sans'] px-4 py-3 w-fit text-white border cursor-pointer bg-[#4B6BFB] rounded-md"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
