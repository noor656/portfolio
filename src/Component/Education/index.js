import React from "react";
import { EducationData } from "../../Utilities/Data/EducationData";

function Education() {
  return (
    <div className="border-t-2 border-violet-900 my-8 lg:py-4" id="education">
      <div className="flex justify-center my-2 lg:py-4">
        <div className="flex items-center">
          <span className="bg-[#776acb] text-white p-2 px-5 text-xl rounded-md uppercase">
            Education
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
          {EducationData.map((data, index) => (
            <div className="relative" key={index}>
              <div className="relative z-10 border-[#1b2c68a0] rounded-lg border-2 bg-gradient-to-r hover:scale-105 cursor-pointer transition-transform duration-300">
                <div className="flex flex-row px-2 py-2 justify-between items-center">
                  <div className="flex-grow text-center text-2xl text-[#169ef2] font-medium">
                    <h1>{data.duration}</h1>
                  </div>
                </div>

                <div className="text-xl text-center">
                  <div className="items-center">
                    <span className="mr-2 text-black uppercase">
                      {data.title}
                    </span>
                  </div>
                  <div className="items-center">
                    <span className="mr-2 text-black">{data.institution}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
