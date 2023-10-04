import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className=" container mx-auto mt-4">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div href="/" className="flex items-center">
            <img src="/Union.png" alt="" className="w-9 h-9 mr-1" />
            <h1 className="flex-1">
              Meta
              <span className="font-semibold">Blog</span>
            </h1>
          </div>
        </Link>
        <div className="flex gap-12  font-light">
          <a href="/">Home</a>
          <a href="/Blog">Blog</a>
          <a href="/Contact">Contact</a>
        </div>
        <div className="bg-[#F4F4F5] flex p-2 rounded-md items-center">
          <input type="text" placeholder="Search" className="bg-[#F4F4F5]" />
          <AiOutlineSearch className="w-[22px] h-[22px] " />
        </div>
      </div>
    </div>
  );
};

export default Header;
