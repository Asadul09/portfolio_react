import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="footer"
      className="min-h-[60vh] flex items-center px-6 md:px-20 text-white bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="w-full max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Contact <span className="text-green-400">Me</span>
        </h2>

        <p className="mb-12 text-lg text-gray-400 md:text-xl">
          Feel free to reach out. I'm always open to discussing new projects,
          creative ideas, or opportunities.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:asadut486@gmail.com"
            className="flex flex-col items-center p-6 transition duration-300 bg-gray-800 rounded-2xl hover:bg-gray-700 hover:scale-105"
          >
            <MdOutlineEmail size={35} className="mb-4 text-green-400" />
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="mt-2 text-sm text-gray-400">
              asadut486@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/a-j-asad-408839270/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 transition duration-300 bg-gray-800 rounded-2xl hover:bg-gray-700 hover:scale-105"
          >
            <CiLinkedin size={35} className="mb-4 text-green-400" />
            <h4 className="text-lg font-semibold">LinkedIn</h4>
            <p className="mt-2 text-sm text-gray-400">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Asadul09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 transition duration-300 bg-gray-800 rounded-2xl hover:bg-gray-700 hover:scale-105"
          >
            <FaGithub size={35} className="mb-4 text-green-400" />
            <h4 className="text-lg font-semibold">GitHub</h4>
            <p className="mt-2 text-sm text-gray-400">
              View my projects
            </p>
          </a>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Asadut Jaman. All rights reserved.
        </div>

      </div>
    </section>
  );
};

export default Footer;