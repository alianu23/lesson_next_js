import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

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

const Footer = () => {
  const isActive = usePathname();

  return (
    <div className="bg-[#F6F6F7] mt-6 bottom-0 pb-5 ">
      <div className=" grid lg:grid-cols-3 lg:mx-24 md:mx-4 md:grid-cols-2 grid-cols-1 p-5">
        <div>
          <h2 className="font-semibold lg:text-lg md:text-base text-sm mb-3">
            About
          </h2>
          <p className="text-[#696A75] lg:text-lg md:text-base text-xs mb-3 lg:w-60 w-auto">
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
        <div className="flex lg:gap-12 gap-2 font-light">
          {navigations.map((navigation, i) => (
            <Link
              className={`font-bold transition-all duration-75 lg:text-lg md:text-base text-xs my-2 ${
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
        <div className="flex mt-1 ">
          <Link
            href="https://www.facebook.com/anudari.oyunbat.50/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsFacebook className="cursor-pointer hover:text-sky-600 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
          </Link>
          <Link
            href="https://twitter.com/Anu001123"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsTwitter className="cursor-pointer hover:text-sky-700 ml-2 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
          </Link>
          <Link
            href="https://www.instagram.com/anuka.o/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsInstagram className="cursor-pointer hover:text-red-400  mx-2 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/any-oyunbat-380380289/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BsLinkedin className="cursor-pointer hover:text-sky-900 lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-4 mb-3">
        <div className="flex lg:mx-24 items-center">
          <img className="w-11 h-11" src="/Logos/Union.png" alt="" />
          <div className="ml-2 ">
            <h1 className="lg:text-lg md:text-base text-xs text-[#141624]">
              Meta
              <span className="font-extrabold lg:text-lg md:text-base text-xs">
                Blog
              </span>
            </h1>
            <p className="text-[#3B3C4A] lg:text-lg md:text-base text-xs">
              © All Rights Reserved
            </p>
          </div>
        </div>
        <div className="flex text-[#3B3C4A] cursor-pointer  lg:mx-24 lg:text-lg md:text-base text-xs items-center mt-3">
          <h3 className="px-2 lg:text-lg md:text-base hover:text-black hover:font-bold text-xs">
            Terms of Use
          </h3>
          <h3 className="border-x-2 hover:text-black hover:font-bold px-2 lg:text-lg md:text-base text-xs">
            Privacy Policy
          </h3>
          <h3 className="px-2 hover:text-black hover:font-bold lg:text-lg md:text-base text-xs">
            Cookie Policy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
