import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F7]">
      <div className=" grid grid-cols-3 p-5">
        <div>
          <h2 className="font-semibold text-lg mb-3">About</h2>
          <p className="text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <h3 className="text-[#181A2A] font-semibold">
            Email :
            <span className="text-[#3B3C4A] font-normal">
              nfo@jstemplate.net
            </span>
          </h3>
          <h3 className="text-[#181A2A] font-semibold">
            Phone :
            <span className="text-[#3B3C4A] font-normal">880 123 456 789</span>
          </h3>
        </div>
        <div className="text-[#3B3C4A]">
          <h2>Home</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>
        <div className="flex ">
          <img className="h-5 w-5 mr-2" src="./facebook.png" alt="" />
          <img className="h-5 w-5 mr-2" src="/twitter.png" alt="" />
          <img className="h-5 w-5 mr-2" src="/insta.png" alt="" />
          <img className="h-5 w-5" src="/linkedin.png" alt="" />
        </div>
      </div>
      <div className="flex content-between items-center">
        <div className="flex content-center items-center">
          <img className="w-11 h-11" src="/Union.png" alt="" />
          gi
          <div className="ml-2 ">
            <h1 className="text-xl text-[#141624]">
              Meta <span className="font-extrabold">Blog</span>
            </h1>
            <p className="text-[#3B3C4A]">© All Rights Reserved</p>
          </div>
        </div>
        <div className="flex text-[#3B3C4A]">
          <h3 className="px-2">Terms of Use</h3>
          <h3 className="border-x-2 px-2">Privacy Policy</h3>
          <h3 className="px-2">Cookie Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
