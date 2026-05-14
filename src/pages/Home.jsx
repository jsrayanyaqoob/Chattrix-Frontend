import {
  FaBookBookmark,
  FaMagnifyingGlass,
  FaChevronRight,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaLink
} from "react-icons/fa6"

import firstImg from "../assets/firstImg.png"
import secondImg from "../assets/secondImg.png"
import thirdImg from "../assets/thirdImg.png"

export default function Home() {
  return (

    <div className="bg-black min-h-screen overflow-hidden">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-5 sm:px-8 py-4">

        <div className="flex items-center gap-5 sm:gap-[2.1rem]">

          <h1 className="text-white text-[28px] sm:text-[30px] font-semibold font-mono">
            Chattrix
          </h1>

          <FaBookBookmark className="text-[#707070] text-[16px] cursor-pointer" />

        </div>

        <div className="flex items-center gap-5">

          <FaMagnifyingGlass className="text-[#707070] text-[15px] cursor-pointer hidden sm:block" />

          <a href="/login">

            <button className="text-white bg-[#1e1e1e] px-[18px] sm:px-[22px] py-[9px] rounded-full font-medium text-[14px] cursor-pointer hover:bg-[#2A2A2A] transition duration-300">

              Log in

            </button>

          </a>

        </div>

      </nav>

      {/* Hero Section */}

      <div className="flex flex-col gap-2 my-5 py-5">

        <p className="text-white text-[14px] font-medium text-center mt-5 px-4">

          December 15, 2025

          <span className="text-[#707070] transition hover:text-white duration-300 ease-in cursor-pointer ml-3">

            Product

          </span>

        </p>

        <h1 className="text-white text-[2.8rem] sm:text-[4rem] font-medium text-center leading-tight px-5">

          Introducing Chattrix

        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6 px-5">

          <a href="/chat">

            <button className="bg-white rounded-full cursor-pointer py-[10px] px-[25px] text-[16px] sm:text-[17px] font-medium hover:bg-[#707070] transition duration-500 ease-in flex items-center">

              Try Chattrix

              <FaChevronRight className="text-[12px] ml-1" />

            </button>

          </a>

          <button className="text-white cursor-pointer font-medium hover:text-[#707070] transition duration-500 ease-in flex items-center gap-1 text-center">

            Learn about Chattrix

            <FaChevronRight className="text-[12px]" />

          </button>

        </div>

      </div>

      {/* Socials */}

      <div className="flex justify-center mt-8 pt-8 flex-col items-center">

        <p className="bg-[#1F1F1F] w-[90%] sm:w-[600px] h-[1.5px]"></p>

        <div className="flex items-center w-[90%] sm:w-[600px] justify-between px-1 mt-3">

          <div className="text-white text-center text-[20px] sm:text-[22px] flex gap-3">

            <FaTwitter className="text-[#1C96E8] cursor-pointer" />

            <FaInstagram className="text-[#FA0873] cursor-pointer" />

            <FaFacebook className="text-[#107BEB] cursor-pointer" />

            <FaTelegram className="text-[#30ACEB] cursor-pointer" />

          </div>

          <div className="text-white cursor-pointer hover:text-[#707070] transition duration-300 ease-in-out">

            <span className="text-sm font-medium flex items-center gap-1">

              <FaLink />

              Share

            </span>

          </div>

        </div>

      </div>

      {/* Introduction */}

      <div className="mt-3">

        <div className="flex justify-center mt-5 pt-5 px-4">

          <p
            className="text-white w-full sm:w-[580px] text-[15px] sm:text-[17px] tracking-wide leading-relaxed"
            style={{ wordSpacing: "0.5px" }}
          >

            Chattrix is a smart and responsive chatbot designed to deliver
            quick, accurate, and helpful information. It’s easy to use, fast in
            response, and ideal for learning, exploring ideas, or solving
            everyday problems. With its clean interface and intelligent replies,
            Chattrix is your reliable digital assistant.

          </p>

        </div>

        {/* Samples */}

        <div className="flex flex-col items-center justify-center">

          <h1 className="text-white text-[32px] sm:text-[40px] font-semibold my-5 pt-5">

            Samples

          </h1>

          {/* User */}

          <div className="bg-[#1F1F1F] w-[92%] sm:w-[600px] rounded-lg p-5 px-4 mb-2 mt-5">

            <span className="font-bold text-[#A5A5A5] text-[14px]">

              User

            </span>

            <p className="text-white text-[15px]">

              Explain how photosynthesis works? Give me all the detailing about
              it for my assignment.

            </p>

          </div>

          {/* AI */}

          <div className="bg-[#0E161A] w-[92%] sm:w-[600px] rounded-lg p-5 px-4 my-2">

            <span className="font-bold text-[#A5A5A5] text-[14px]">

              Chattrix

            </span>

            <p className="text-white text-[15px] leading-normal flex gap-2 flex-col">

              <span>
                Photosynthesis is the process by which green plants, algae, and
                some bacteria make their own food using sunlight.
              </span>

              <span>
                During photosynthesis, plants take in carbon dioxide from the
                air and water from the soil.
              </span>

              <span>The basic equation looks like this:</span>

              <span>
                Carbon dioxide + Water + Sunlight → Glucose + Oxygen
              </span>

            </p>

          </div>

        </div>

      </div>

      {/* Code Example */}

      <div className="flex flex-col items-center justify-center px-4">

        <div className="bg-[#1F1F1F] w-[92%] sm:w-[600px] rounded-lg p-5 px-4 mb-2 mt-5">

          <span className="font-bold text-[#A5A5A5] text-[14px]">

            User

          </span>

          <p className="text-white text-[15px] mb-4">

            This code is not working. What is wrong in this code?

          </p>

          <div className="text-white font-mono leading-relaxed mt-3 pt-3">

            <div className="bg-[#313131] w-full overflow-x-auto p-5 rounded-lg text-[14px] sm:text-[15px]">

              <pre>{`function greetUser(name) {
  if (name = "Rayan") {
    console.log("Hello, Rayan!");
  } else {
    console.log("Hello, guest!");
  }
}

greetUser("Rayan");`}</pre>

            </div>

          </div>

        </div>

        {/* AI Response */}

        <div className="bg-[#0E161A] w-[92%] sm:w-[600px] rounded-lg p-5 px-4 mt-2">

          <span className="font-bold text-[#A5A5A5] text-[14px]">

            Chattrix

          </span>

          <p className="text-white text-[15px] leading-normal mb-4">

            You used = instead of === in the if condition.

          </p>

          <ul className="text-white ml-5 mt-4 flex flex-col gap-4 list-disc">

            <li>
              Single = assigns value instead of comparing.
            </li>

            <li>
              Use === for strict equality comparison.
            </li>

          </ul>

          <hr className="w-[98%] h-[1.5px] my-[30px] rounded-[5px] border-none bg-[#2C2C2C]" />

          <div className="bg-[#313131] w-full overflow-x-auto p-5 rounded-lg text-[14px] sm:text-[15px] mt-3 text-white font-mono">

            <pre>{`if (name === "Rayan") {
   // ...
}`}</pre>

          </div>

        </div>

      </div>

      {/* Methods */}

      <div>

        <h1 className="text-white text-[32px] sm:text-[40px] text-center font-semibold mt-8 mb-5 pt-5">

          Methods

        </h1>

        <div className="flex flex-col justify-center items-center text-white gap-5 px-4">

          <p className="w-full sm:w-[600px]">
            To start using Chattrix, simply type your question or message into
            the input box and press enter.
          </p>

          <p className="w-full sm:w-[600px]">
            You can use Chattrix for coding, studies, writing, and general
            knowledge.
          </p>

          <p className="w-full sm:w-[600px]">
            Be specific in your prompts for better responses.
          </p>

        </div>

      </div>

      {/* Limitations */}

      <div>

        <h1 className="text-white text-[32px] sm:text-[40px] text-center font-semibold mt-8 mb-5 pt-5">

          Limitations

        </h1>

        <div className="mb-10 px-4">

          <ul className="text-white flex flex-col gap-4 list-disc justify-center items-center">

            <li className="w-full sm:w-[600px]">
              Chattrix avoids harmful or explicit content.
            </li>

            <li className="w-full sm:w-[600px]">
              It should not replace professional advice.
            </li>

            <li className="w-full sm:w-[600px]">
              It does not store personal user data.
            </li>

            <li className="w-full sm:w-[600px]">
              Responses may occasionally be inaccurate.
            </li>

            <li className="w-full sm:w-[600px]">
              Clear prompts improve response quality.
            </li>

          </ul>

        </div>

      </div>

      {/* Related Articles */}

      <div className="py-10 px-5">

        <div className="text-white flex flex-col sm:flex-row justify-between items-center mt-20 mb-8 gap-4">

          <h1 className="text-[24px] px-12 font-medium">
            Related articles
          </h1>

          <h2 className="text-[15px] sm:text-[16px] px-12 text-[#A5A5A5]">
            View all product articles
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-10 w-full rounded-xl">

          {/* Card 1 */}

          <div className="w-full sm:w-[350px]">

            <div className="w-full h-[15rem] sm:h-[19rem] rounded-xl overflow-hidden cursor-pointer">

              <img
                src={firstImg}
                alt="Design 1"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />

            </div>

            <div className="mt-3 flex text-white flex-col cursor-pointer">

              <span className="text-[17px] font-semibold">
                Global news partnerships
              </span>

              <p className="text-[13.5px] mt-3">

                Company

                <span className="text-[#707070] font-semibold ml-2">
                  Aug 15, 2023
                </span>

              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="w-full sm:w-[350px]">

            <div className="w-full h-[15rem] sm:h-[19rem] rounded-xl overflow-hidden cursor-pointer">

              <img
                src={secondImg}
                alt="Design 2"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />

            </div>

            <div className="mt-3 flex text-white flex-col cursor-pointer">

              <span className="text-[17px] font-semibold">
                Beautiful design made by Rayan
              </span>

              <p className="text-[13.5px] mt-3">

                Company

                <span className="text-[#707070] font-semibold ml-2">
                  Jul 11, 2021
                </span>

              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="w-full sm:w-[350px]">

            <div className="w-full h-[15rem] sm:h-[19rem] rounded-xl overflow-hidden cursor-pointer">

              <img
                src={thirdImg}
                alt="Design 3"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
              />

            </div>

            <div className="mt-3 flex text-white flex-col cursor-pointer">

              <span className="text-[17px] font-semibold">
                New features of Chattrix
              </span>

              <p className="text-[13.5px] mt-3">

                Company

                <span className="text-[#707070] font-semibold ml-2">
                  Dec 15, 2025
                </span>

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <footer className="border-t border-[#1F1F1F] mt-20">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-14 px-6 sm:px-10 lg:px-[8.5rem] py-16">

          {/* Left */}

          <div className="flex flex-col gap-5">

            <h1 className="text-white text-[34px] font-semibold">
              Chattrix
            </h1>

            <p className="text-[#8A8A8A] w-full sm:w-[380px] leading-relaxed text-[15px]">

              Chattrix is an intelligent AI assistant designed to help users
              with coding, learning, productivity, and everyday questions
              through fast and reliable conversations.

            </p>

            <div className="flex items-center gap-4 mt-2 text-[20px]">

              <FaTwitter className="text-[#7A7A7A] hover:text-white transition duration-300 cursor-pointer" />

              <FaInstagram className="text-[#7A7A7A] hover:text-white transition duration-300 cursor-pointer" />

              <FaFacebook className="text-[#7A7A7A] hover:text-white transition duration-300 cursor-pointer" />

              <FaTelegram className="text-[#7A7A7A] hover:text-white transition duration-300 cursor-pointer" />

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-wrap gap-14 sm:gap-24">

            <div className="flex flex-col gap-4">

              <h2 className="text-white font-semibold text-[17px]">
                Product
              </h2>

              <div className="flex flex-col gap-3 text-[#8A8A8A] text-[15px]">

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Features
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Updates
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Pricing
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  API
                </span>

              </div>

            </div>

            <div className="flex flex-col gap-4">

              <h2 className="text-white font-semibold text-[17px]">
                Company
              </h2>

              <div className="flex flex-col gap-3 text-[#8A8A8A] text-[15px]">

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  About
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Careers
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Blog
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Contact
                </span>

              </div>

            </div>

            <div className="flex flex-col gap-4">

              <h2 className="text-white font-semibold text-[17px]">
                Resources
              </h2>

              <div className="flex flex-col gap-3 text-[#8A8A8A] text-[15px]">

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Documentation
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Help Center
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Community
                </span>

                <span className="hover:text-white transition duration-300 cursor-pointer">
                  Privacy Policy
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-[#1F1F1F] px-6 sm:px-10 lg:px-[8.5rem] py-6 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-[#707070] text-[14px] text-center sm:text-left">
            © 2026 Chattrix. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[#707070] text-[14px]">

            <span className="hover:text-white transition duration-300 cursor-pointer">
              Terms
            </span>

            <span className="hover:text-white transition duration-300 cursor-pointer">
              Privacy
            </span>

            <span className="hover:text-white transition duration-300 cursor-pointer">
              Security
            </span>

          </div>

        </div>

      </footer>

    </div>

  )
}