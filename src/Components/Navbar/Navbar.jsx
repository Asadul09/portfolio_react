import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed z-50 w-full text-white backdrop-blur-md bg-black/40">
      <div className="flex items-center justify-between px-6 py-5 md:px-20">
        
        {/* Logo */}
        <span className="text-2xl font-bold tracking-wide text-green-400">
          Portfolio
        </span>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 font-semibold md:flex">
          <li><a href="#about" className="transition hover:text-green-400">About</a></li>
          <li><a href="#experience" className="transition hover:text-green-400">Experience</a></li>
          <li><a href="#projects" className="transition hover:text-green-400">Projects</a></li>
          <li><a href="#footer" className="transition hover:text-green-400">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menu ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="flex flex-col items-center gap-6 py-6 font-semibold md:hidden bg-black/90">
          <li>
            <a href="#about" onClick={() => setMenu(false)} className="transition hover:text-green-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMenu(false)} className="transition hover:text-green-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenu(false)} className="transition hover:text-green-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setMenu(false)} className="transition hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;