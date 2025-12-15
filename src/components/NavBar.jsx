import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
  <div className="h-screen w-full bg-gradient-to-b from-[#f7efe5] to-[#a18276] home">
  <div>
    <h1 className="text-5xl font-signature ml-2">

          <a
            className="link-underline link-underline-black"
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noreferrer"
          >
            Rajvi
          </a>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 bg-[#f7efe5] flex justify-between items-center px-6 z-50 shadow">

      {/* BRAND NAME */}
      <h1 className="text-3xl sm:text-4xl font-signature font-bold text-[#6f4e37]">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          Rajvi Bhatt
        </Link>
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-700 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE ICON */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-700 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* MOBILE MENU */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#f7efe5] to-[#a18276] text-gray-700">
          {links.map(({ id, link }) => (
            <li key={id} className="py-6 text-4xl">
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
