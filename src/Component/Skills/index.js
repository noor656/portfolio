import React from "react";
import { SkillsData } from "../../Utilities/Data/SkillsData";

function Skills() {
  return (
    <div className="border-t-2 border-violet-900 my-8 lg:py-4">
      <div className="flex justify-center my-2 lg:py-4">
        <div className="flex items-center">
          <span className="bg-[#776acb] text-white p-2 px-5 text-xl rounded-md uppercase">
            Skills
          </span>
        </div>
      </div>

      <div className="flex justify-center " id="skills">
        <div className="grid  grid-cols-1 gap-1 min-w-10 items-center">
          <div className="flex overflow-x-auto border-[#1b2c68a0] rounded-lg border-2 items-center">
            <div className="flex flex-wrap justify-center ">
              {SkillsData.map((data, index) => {
                const  {skillImage, name}= data;
                return (
                  <div
                  key={index}
                  className="flex flex-wrap items-center border-2 border-[#1f223c] gap-2 p-3 w-36 min-w-fit h-fit flex-col transition-all duration-500 m-1 sm:m-3 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                >
                  <div className="h-6 sm:h-8">
                    <img
                      src={skillImage}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                      alt="profile"
                    />
                  </div>
                  <p className="text-black text-sm sm:text-lg">{name}</p>
                </div>
                )

              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
