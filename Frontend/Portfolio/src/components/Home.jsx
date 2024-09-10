import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiJavaLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import pic from "../../public/Pic.JPG";
import { ReactTyped } from "react-typed";

function Home() {
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/rohan-pise-1b7b80244/",
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
  const handlegit = () => {
    window.open(
      "https://github.com/Rohan-Pise",
      "_blank",
      "noopener",
      "noreferrer"
    );
  };
  return (
    <>
      <div name='Home'
      className="w-full px-4 py-2 md:px-15  md:items-center  h-auto my-20">
        <div className="w-full flex flex-col md:flex-row justify-between">
          <div className=" mt-6 md:w-1/2 order-2 md:order-1">
            <span className="font-semibold text-xl">
              {" "}
              Welcome To My Website{" "}
            </span>
            <div className="flex space-x-1 text-3xl md:text-4xl">
              <h1 className="font-semibold "> Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-semibold"
                strings={["Developer", "Programmer", "Software Enthusiast"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="font-semibold text-xs md:text-xl text-justify ">
              As a passionate and driven MERN Stack developer, I am eager to
              begin my professional journey in web development. With a <span className="bg-green-400">solid
              foundation in MongoDB, Express.js, React, and Node.js </span>, I have
              gained hands-on experience through academic projects and personal
              initiatives. I am proficient in building full-stack web
              applications, focusing on creating responsive user interfaces and
              efficient backend systems. While I’m continuously learning and
              expanding my skill set, I’m excited to collaborate with teams on
              real-world projects where I can contribute fresh ideas and
              enthusiasm. I am looking for opportunities to apply my knowledge,
              grow as a developer, and help bring innovative solutions to life.
            </p>
            <br />
            {/*Social media Icons */}
            <div className=" flex flex-col  md:flex-row justify-between items-center">
              <div className="">
                <h1 className="font-bold text-xl text-center">Available on</h1>
                <ul className="flex space-x-5 text-xl py-2">
                  <li
                    className="cursor-pointer hover:scale-150 duration-300 text-2xl"
                    onClick={handleClick}
                  >
                    {" "}
                    <BsLinkedin />{" "}
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300 text-2xl">
                    {" "}
                    <FaSquareInstagram />{" "}
                  </li>
                  <li
                    className="cursor-pointer hover:scale-150 duration-300  text-2xl"
                    onClick={handlegit}
                  >
                    {" "}
                    <FaSquareGithub />{" "}
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300 text-2xl">
                    <IoLogoWhatsapp />
                  </li>
                </ul>
              </div>
              <div className="py-4">
                <h1 className="font-bold text-xl text-center ">Worked on</h1>
                <ul className="flex space-x-5 text-xl py-2">
                  <li className="cursor-pointer hover:scale-150 duration-300 text-2xl">
                    {" "}
                    <RiJavaLine />{" "}
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300 text-2xl">
                    {" "}
                    <IoLogoJavascript />{" "}
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300 text-2xl">
                    {" "}
                    <FaReact />{" "}
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300  text-2xl">
                    <FaNodeJs />
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300  text-2xl">
                    <SiMongodb />
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300  text-2xl">
                    <SiPostman />
                  </li>
                  <li className="cursor-pointer hover:scale-150 duration-300 text-2xl">
                    <SiMysql />
                  </li>
                </ul>

              </div>
              
            </div>
            
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-15 order-1 md:order-2 ">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <hr className="font-bold" />
    </>
  );
}

export default Home;
