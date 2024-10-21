import React from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { FaLongArrowAltUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  };
  return (
    <div className="relative border-t border-[#353951] text-black">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10 lg:col-span-2">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm">
            © Developer Portfolio by
            <Link
              to="https://www.linkedin.com/in/noor-afshan-21b872135"
              target="_blank"
              className="uppercase text-[#169ef2]"
            >
              {" "}
              Noor Afshan{" "}
            </Link>
          </p>
          <div className="flex items-center gap-5 mt-4 lg:mt-0">
            <Link
              target="_blank"
              to="https://github.com/noor656/portfolio"
              className="flex items-center gap-2 uppercase hover:text-[#169ef2]"
            >
              <IoStar />
              <span>Star</span>
            </Link>
          </div>

          <button
            className="fixed bottom-4 right-4 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out text-white"
            onClick={scrollToTop}
          >
            <FaLongArrowAltUp />
          </button>
        </div>
      </div>
    </div>
  );
}
