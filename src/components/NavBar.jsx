import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = ["home", "about", "portfolio", "experience", "contact"];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#f7efe5] flex justify-between items-center px-6 z-50 shadow">
        <h1 className="text-3xl sm:text-4xl font-signature text-[#6f4e37]">
          <Link to="home" smooth duration={500} offset={-80}>
            Rajvi Bhatt
          </Link>
        </h1>

        <ul className="hidden md:flex">
          {links.map((link) => (
            <li
              key={link}
              className="px-4 cursor-pointer capitalize font-medium text-gray-700"
            >
              <Link to={link} smooth duration={500} offset={-80}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden text-gray-700"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </nav>

      {/* MOBILE MENU — OUTSIDE NAV */}
      {nav && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#f7efe5] to-[#a18276] z-40 flex flex-col justify-center items-center">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setNav(false)}
              className="py-6 text-4xl capitalize cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
