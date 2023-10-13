import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

const Header = () => {
  const isActive = usePathname();

  return (
    <div className=" container mx-auto border-b-[1px] ">
      <div className="flex items-center justify-between lg:flex-row flex-col">
        <Link href={"/"}>
          <div href="/" className="flex items-center mr-3 my-5">
            <img
              src="/Logos/Union.png"
              alt=""
              className="lg:w-9 md:w-7 md:h-7 mr-1 w-4 h-4"
            />
            <h1 className="flex-1 text-base ">
              Meta
              <span className="font-semibold text-base ">Blog</span>
            </h1>
          </div>
        </Link>
        <div className="flex lg:gap-12 gap-2 font-light">
          {navigations.map((navigation, i) => (
            <Link
              className={`font-bold transition-all duration-75 lg:text-lg md:text-base text-xs mx-2 ${
                isActive === navigation.path
                  ? "text-[#282ed2]"
                  : "hover:text-[#282ed2] "
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="bg-[#F4F4F5] flex p-2 rounded-md items-center my-5">
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
