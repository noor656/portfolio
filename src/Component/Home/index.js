import React from "react";
import { PersonalData } from "../../Utilities/Data/PersonalData";
import { profileImage } from "../../Utilities/Data/Profile";
import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";

export default function Home() {
  return (
    <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
      <div className=" border-[#1b2c68a0] relative rounded-lg border-2 bg-gradient-to-r ">
        <div className="p-6">
          {" "}
          <h1 className="translate-x-6 text-3xl text-black leading-10 font-bold md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            <span className="inline-flex items-center">
              Hello{" "}
              <img
                // src="../../../assets/profile/Hello.gif"
                src={`${process.env.PUBLIC_URL}/assets/profile/Hello.gif`}
                alt="Hello"
                width="20px"
                className="ml-2"
              />
            </span>
            ,
            <br />
            <span className="inline-block">
              This Is <span className="text-pink-600">{PersonalData.name}</span>
              {`, I am a professional `}
              <span className="text-[#169ef2]">{PersonalData.designation}</span>
              .
            </span>
          </h1>
          <div className="flex justify-center gap-5">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              to={PersonalData.resume}
            >
              <span>Get Resume New</span>
              <MdDownload size={16} />
            </Link>
            {/* </Router> */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center lg:items-end mt-8">
        <img
          className="w-[200px] md:w-[250px] lg:w-[300px] rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          src={PersonalData.profileImg}
          alt="profile"
        />
      </div>
    </div>
  );
}
