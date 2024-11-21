import React from "react";
import { PersonalData } from "../../Utilities/Data/PersonalData";
export default function AboutUs() {
  return (
    <div
      id="about"
      className="my-12 lg:my-16 relative border-t-2 border-violet-900"
    >
      {/* <div className="border-t-2 border-violet-900 my-8 lg:py-4" id="about"> */}
      <div className="flex justify-center my-2 lg:py-4">
        <div className="flex items-center">
          <span className="bg-[#776acb] text-white p-2 px-5 text-xl rounded-md uppercase">
            About me
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className=" ml-4 items-center">
          <p className="uppercase text-[#169ef2]  mb-5 text-xl font-medium">
            who i am ?
          </p>
          <p className="text-black text-sm lg:text-xl">
            {PersonalData.description}
          </p>
          <div></div>
        </div>
        <div className=" border-[#1b2c68a0] relative rounded-lg border-2 bg-gradient-to-r">
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="overflow-hidden text-lg  border-t-[2px] border-violet-900 px-4 lg:px-8 py-4 lg:py-8">
            <div className="blink">
              <span className="mr-2 text-pink-400">Const</span>
              <span className="mr-2 text-black">Coder</span>
              <span className="mr-2 text-pink-400">=</span>
              <span className="mr-2 text-gray-400">{`{`}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8  mr-2 text-black">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-orange-400">Noor Afshan</span>
              <span className="text-gray-400">{`',`}</span>
            </div>

            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-black">skills:</span>
              <span className="text-gray-400">{` [ '`}</span>
              <span className="text-orange-400">HTML</span>
              <span className="text-gray-400 ">{"',  '"}</span>
              <span className="text-orange-400">CSS</span>
              <span className="text-gray-400 ">{"',   '"}</span>
              <span className="text-orange-400">Bootstrap</span>
              <span className="text-gray-400">{"',  '"}</span>
              <span className="text-orange-400">JS</span>
              <span className="text-gray-400">{"',  '"}</span>
              <span className="text-orange-400">JQuery</span>
              <span className="text-gray-400">{"',  '"}</span>
              <span className="text-orange-400">MySql</span>
              <span className="text-gray-400">{"',  '"}</span>
              <span className="text-orange-400">PHP</span>
              <span className="text-gray-400">{"',  '"}</span>
              <span className="text-orange-400">React Js</span>
              <span className="text-gray-400">{"',  '"}</span>
              <span className="text-orange-400">Material Ui</span>
              <span className="text-gray-400">{"' ],"}</span>
            </div>

            <div>
              <span className=" text-black ml-4 lg:ml-8 mr-2">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">{","}</span>
            </div>
            <div>
              <span className=" text-black ml-4 lg:ml-8 mr-2">
                quickLearner:
              </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">{","}</span>
            </div>
            <div>
              <span className=" text-black ml-4 lg:ml-8 mr-2">
                problemSolver:
              </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">{","}</span>
            </div>

            <div>
              <span className=" text-green-400 ml-4 lg:ml-8 mr-2">
                hireable :
                <span className="text-orange-400 ml-1 lg:ml-2 mr-1">
                  function
                </span>
                <span className="text-gray-400 ">{`() {`}</span>
              </span>
            </div>

            <div>
              <span className=" text-orange-400 ml-8 lg:ml-16 mr-2">
                return
              </span>
              <span className="text-gray-400 ">{`(`}</span>
            </div>

            <div>
              <span className=" text-cyan-400 ml-12 lg:ml-24">this.</span>
              <span className="text-black ">hardWorker</span>
              <span className="text-orange-400 ml-1 lg:ml-2 mr-1">&&</span>
            </div>
            <div>
              <span className=" text-cyan-400 ml-12 lg:ml-24">this.</span>
              <span className="text-black ">problemSolver</span>
              <span className="text-orange-400 ml-1 lg:ml-2 mr-1">&&</span>
            </div>
            <div>
              <span className=" text-cyan-400 ml-12 lg:ml-24">this.</span>
              <span className="text-black ">skills.length</span>
              <span className="text-orange-400 ml-1 lg:ml-2 mr-1">{`>=`}</span>
              <span className="text-orange-400 ml-1 lg:ml-2 mr-1">5</span>
            </div>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
            </div>
            <div>
              <span className="text-gray-400">{`};`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
