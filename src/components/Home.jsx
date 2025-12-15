import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profile from "../assets/IMG_8659(1).jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#f7efe5] to-[#a18276]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6">

        {/* TEXT SECTION */}
        <div className="flex flex-col justify-center text-black md:w-1/2">
          <h2 className="text-4xl sm:text-6xl font-bold">
            Hi, I’m Rajvi Bhatt
          </h2>

          <h3 className="text-xl sm:text-2xl mt-3 text-[#6f4e37] font-semibold">
            AI / ML Enthusiast & Frontend Learner
          </h3>

          <p className="py-6 max-w-md text-lg">
            I’m a passionate fresher exploring Artificial Intelligence and
            Machine Learning, with a keen interest in integrating AI with
            cybersecurity in the future. I also have beginner-level experience
            in frontend development and enjoy building clean, meaningful
            projects.
          </p>

          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group w-fit px-6 py-3 flex items-center rounded-md bg-[#6f4e37] text-white cursor-pointer hover:scale-105 duration-300"
          >
            View Portfolio
            <span className="group-hover:rotate-90 duration-300 ml-1">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>

        {/* IMAGE SECTION */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src={profile}
            alt="Rajvi Bhatt"
            className="rounded-2xl w-64 sm:w-72 md:w-80 shadow-xl border-4 border-[#6f4e37]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
