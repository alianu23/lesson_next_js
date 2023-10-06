import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F7] mt-6 bottom-0 ">
      <div className=" grid grid-cols-3 p-5">
        <div>
          <h2 className="font-semibold lg:text-lg md:text-base text-sm mb-3">
            About
          </h2>
          <p className="text-[#696A75] lg:text-lg md:text-base text-xs mb-3 lg:w-64 md:w-40 w-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <h3 className="text-[#181A2A] lg:text-base md:text-sm text-xs font-semibold">
            Email :
            <span className="text-[#3B3C4A] lg:text-base md:text-sm text-xs font-normal">
              nfo@jstemplate.net
            </span>
          </h3>
          <h3 className="text-[#181A2A] lg:text-base md:text-sm text-xs font-semibold">
            Phone :
            <span className="text-[#3B3C4A] lg:text-base md:text-sm text-xs font-normal">
              880 123 456 789
            </span>
          </h3>
        </div>
        <div className="text-[#3B3C4A]">
          <a href="/" className="mr-2 lg:text-base md:text-sm text-xs">
            Home
          </a>
          <a href="/Blog" className="mr-2 lg:text-base md:text-sm text-xs">
            Blog
          </a>
          <a href="/Contact" className="lg:text-base md:text-sm text-xs">
            Contact
          </a>
        </div>
        <div className="flex mt-1 ml-2 ">
          <img
            className="lg:h-5 lg:w-5 w-4 h-4 mr-2"
            src="./facebook.png"
            alt=""
          />
          <img
            className="lg:h-5 lg:w-5 w-4 h-4  mr-2"
            src="/twitter.png"
            alt=""
          />
          <img
            className="lg:h-5 lg:w-5 w-4 h-4  mr-2"
            src="/insta.png"
            alt=""
          />
          <img className="lg:h-5 lg:w-5 w-4 h-4 " src="/linkedin.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 mb-3">
        <div className="flex content-center items-center">
          <img className="w-11 h-11" src="/Union.png" alt="" />
          <div className="ml-2 ">
            <h1 className="lg:text-lg md:text-base text-xs text-[#141624]">
              Meta{" "}
              <span className="font-extrabold lg:text-lg md:text-base text-xs">
                Blog
              </span>
            </h1>
            <p className="text-[#3B3C4A] lg:text-lg md:text-base text-xs">
              © All Rights Reserved
            </p>
          </div>
        </div>
        <div className="flex text-[#3B3C4A] lg:text-lg md:text-base text-xs items-center">
          <h3 className="px-2 lg:text-lg md:text-base text-xs">Terms of Use</h3>
          <h3 className="border-x-2 px-2 lg:text-lg md:text-base text-xs">
            Privacy Policy
          </h3>
          <h3 className="px-2 lg:text-lg md:text-base text-xs">
            Cookie Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
