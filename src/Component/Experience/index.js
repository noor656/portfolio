import React from "react";
import { ExperienceData } from "../../Utilities/Data/ExperienceData";

function Experience() {
  return (
    <div className="border-t-2 border-violet-900 my-8 lg:py-4" id="experience">
      <div className="flex justify-center my-2 lg:py-4">
        <div className="flex items-center">
          <span className="bg-[#776acb] text-white p-2 px-5 text-xl rounded-md uppercase">
            Experience
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:overflow-hidden">
        {ExperienceData.map((data, index) => (
          <div className="max-w-2xl">
            <div className="border-[#1b2c68a0] relative rounded-lg border-2 bg-gradient-to-r">
              <div className="flex flex-row px-4  py-5 justify-between items-center">
                <div className="flex flex-row space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-grow text-center text-2xl text-[#169ef2] font-medium">
                  <h1>{data.organization}</h1>
                </div>
              </div>

              <div className="overflow-hidden text-l border-t-[2px] border-violet-900 px-4 lg:px-8 py-4 lg:py-8">
                <div className="blink">
                  <span className="mr-2 text-pink-400">Const</span>
                  <span className="mr-2 text-black">Projects</span>
                  <span className="mr-2 text-pink-400">=</span>
                  <span className="mr-2 text-gray-400">{`{`}</span>
                </div>
                {data?.experience?.map((exp, projectIndex) => (
                  <>
                    <div key={projectIndex}>
                      <div className="blink">
                        {" "}
                        <span className="mr-2 text-black">
                          Project {projectIndex + 1}
                        </span>
                        <span className="mr-2 text-pink-400">:</span>
                        <span className="mr-2 text-gray-400">{`{`}</span>
                      </div>

                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-black">
                          name:
                        </span>
                        <span className="text-gray-400">{`'`}</span>

                        <span className="text-orange-400">{exp.name}</span>
                        <span className="text-gray-400">{`',`}</span>
                      </div>

                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-black">Tools:</span>

                        <span className="text-gray-400">{` [ '`}</span>
                        <span className="text-orange-400">
                          {" "}
                          {exp.tools && exp.tools.length > 0
                            ? exp.tools.join(", ") // Join the tools with a comma and space
                            : ""}
                        </span>

                        <span className="text-gray-400">{"' ],"}</span>
                      </div>

                      <div>
                        <span className="text-black ml-4 lg:ml-8 mr-2">
                          myRole:
                        </span>
                        <span className="text-green-400">{exp?.myRole}</span>
                        <span className="text-gray-400">{","}</span>
                      </div>

                      <div>
                        <span className="text-gray-400 ml-24">{`},`}</span>
                      </div>
                    </div>
                  </>
                ))}
                <div>
                  <span className="text-gray-400 ml-20">{`};`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
