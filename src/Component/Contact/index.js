import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PersonalData } from "../../Utilities/Data/PersonalData";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

// import groovyWalkAnimation from "./groovyWalk.json";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pjj1pro", "template_wic4yt7", form.current, {
        publicKey: "z4qKRZXdd_Y3LTVcu",
      })
      .then(
        () => {
          console.log("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="my-12 lg:my-16 relative mt-24 border-t-2 border-violet-900"
    >
      {/* <div className="border-t-2 border-violet-900 my-8 lg:py-4" id="contact"> */}
      <div className="flex justify-center my-2 lg:py-4">
        <div className="flex items-center">
          <span className="bg-[#776acb] text-white p-2 px-5 text-xl rounded-md uppercase">
            Contact
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <p className="font-medium mb-5 text-[#169ef2] text-xl uppercase">
            Contact with me
          </p>
          <div className=" border-[#1b2c68a0] relative rounded-lg border-2 bg-gradient-to-r">
            <form ref={form} onSubmit={sendEmail}>
              <div className="space-y-12 border-[#1b2c68a0] px-4 lg:px-8 py-4 lg:py-8">
                <div>
                  <p className="mt-1 text-xl leading-6 text-black">
                    Feel free to reach out to me for any questions or
                    opportunities!
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium leading-6 text-black"
                      >
                        Your Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="userName"
                          name="userName"
                          type="userName"
                          autoComplete="userName"
                          className="w-full border rounded-md border-[#353a52] focus:border-[#169ef2] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium leading-6 text-black"
                      >
                        Your Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="userEmail"
                          name="userEmail"
                          type="userEmail"
                          autoComplete="userEmail"
                          className="w-full border rounded-md border-[#353a52] focus:border-[#169ef2] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-lg font-medium leading-6 text-black"
                      >
                        Your Message
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="w-full border rounded-md border-[#353a52] focus:border-[#169ef2] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center m-2">
                <button
                  type="submit"
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                >
                  Send
                  <FaEnvelopeCircleCheck size="16" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:w-3/4 mt-10 flex flex-col  lg:items-start mx-auto">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:rotate-45  hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{PersonalData.email}</span>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:scale-110 hover:rotate-45  duration-300transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{PersonalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10 ">
            {/* <Router> */}
            <Link
              to={PersonalData.github}
              target="_blank"
              className="transition-all  hover:rotate-45  duration-300"
            >
              <BsGithub size={36} />
            </Link>
            <Link
              to={PersonalData.linkedIn}
              target="_blank"
              className="transition-all text-[#0a66c2] hover:rotate-45 duration-300"
            >
              <FaLinkedin size={36} />
            </Link>
            {/* <Link
                to={PersonalData.facebook}
                target="_blank"
                className="transition-all text-[#0866ff] hover:rotate-45 duration-300"
              >
                <FaFacebook size={36} />
              </Link> */}
            <Link
              to={PersonalData.twitter}
              target="_blank"
              className="transition-all text-sky-400 hover:rotate-45 duration-300"
            >
              <FaTwitterSquare size={36} />
            </Link>
            {/* </Router> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
