
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isActive, setActive] = useState(false);

  function closeMenu() {
    setActive(false);
  }

  function toggleMenu() {
    setActive(!isActive);
  }

  return (
    <nav className="bg-transparent">
      {/* <div class="flex max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl justify-between"> */}
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
        <div className="flex flex-shrink-0 items-center">
          <Link
            to="/#home"
            className="text-[#169ef2] text-3xl font-bold uppercase hover:scale-110"
          >
            {`<Noor Afshan/>`}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-3xl focus:outline-none hover:text-blue-600"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>

        {/* Modal Menu */}
        <ul
          className={`${
            isActive
              ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white"
              : "hidden"
          } transition duration-500 ease-in-out lg:flex lg:items-center lg:space-x-4 lg:bg-transparent lg:static lg:w-auto lg:opacity-100`}
        >
          {/* Close Button for Modal */}
          <button
            className="absolute top-4 right-4 text-white text-3xl lg:hidden"
            onClick={closeMenu}
          >
            <AiOutlineClose />
          </button>

          <li className="my-4 lg:my-0">
            <HashLink
              smooth
              to="/#about"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={closeMenu}
            >
              <div className="text-xl transition-colors duration-300 hover:border-b-4 border-violet-900">
                ABOUT
              </div>
            </HashLink>
          </li>
          <li className="my-4 lg:my-0">
            <HashLink
              smooth
              to="/#experience"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={closeMenu}
            >
              <div className="text-xl transition-colors duration-300 hover:border-b-4 border-violet-900">
                EXPERIENCE
              </div>
            </HashLink>
          </li>
          <li className="my-4 lg:my-0">
            <HashLink
              smooth
              to="/#skills"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={closeMenu}
            >
              <div className="text-xl transition-colors duration-300 hover:border-b-4 border-violet-900">
                SKILLS
              </div>
            </HashLink>
          </li>
          <li className="my-4 lg:my-0">
            <HashLink
              smooth
              to="/#education"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={closeMenu}
            >
              <div className="text-xl transition-colors duration-300 hover:border-b-4 border-violet-900">
                EDUCATION
              </div>
            </HashLink>
          </li>
          <li className="my-4 lg:my-0">
            <HashLink
              smooth
              to="/#contact"
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              onClick={closeMenu}
            >
              <div className="text-xl uppercase transition-colors duration-300 hover:border-b-4 border-violet-900">
                CONTACT
              </div>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
