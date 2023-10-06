import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className=" container mx-auto mt-4 border-b-[1px] pb-3">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div href="/" className="flex items-center mr-3">
            <img
              src="/Union.png"
              alt=""
              className="lg:w-9 lg:h-9 md:w-7 md:h-7 mr-1 w-4 h-4"
            />
            <h1 className="flex-1 lg:text-base md:text-sm text-xs">
              Meta
              <span className="font-semibold lg:text-base md:text-sm text-xs">
                Blog
              </span>
            </h1>
          </div>
        </Link>
        <div className="flex lg:gap-12 gap-2 font-light">
          <a href="/" className="lg:text-base md:text-sm text-xs">
            Home
          </a>
          <a href="/Blog" className="lg:text-base md:text-sm text-xs">
            Blog
          </a>
          <a href="/Contact" className="lg:text-base md:text-sm text-xs">
            Contact
          </a>
        </div>
        <div className="bg-[#F4F4F5] flex p-2 rounded-md items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F4F4F5] text-xs lg:text-lg"
          />
          <AiOutlineSearch className="lg:w-[22px] lg:h-[22px] md:w-5 md:h-5 w-3 h-3 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
