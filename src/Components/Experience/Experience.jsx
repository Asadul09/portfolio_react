import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedis, SiMongodb, SiExpress } from "react-icons/si";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 text-white md:px-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
          My <span className="text-green-400">Experience</span>
        </h2>

        <div className="grid items-start gap-16 md:grid-cols-2">

          {/* Skills Section */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-green-400">
              Technical Skills
            </h3>

            <div className="grid grid-cols-3 gap-6">
              {[ 
                <FaHtml5 color="#E34F26" size={40} />,
                <FaCss3 color="#1572b6" size={40} />,
                <FaReact color="#61DAFB" size={40} />,
                <FaJs color="#F7DF1E" size={40} />,
                <FaNodeJs color="#3C873A" size={40} />,
                <SiExpress color="#ffffff" size={40} />,
                <SiMongodb color="#47A248" size={40} />,
                <SiRedis color="#FF4438" size={40} />,
                <FaGitAlt color="#F1502F" size={40} />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-5 transition duration-300 bg-gray-800 rounded-2xl hover:bg-gray-700 hover:scale-105"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-green-400">
              Professional Journey
            </h3>

            <div className="space-y-8">

              <div className="p-6 transition duration-300 bg-gray-800 rounded-2xl hover:bg-gray-700">
                <h4 className="text-xl font-bold">
                  MERN Stack Developer
                </h4>
                <p className="text-sm text-gray-400">
                  2023 - Present
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>• Built full-stack applications using MongoDB, Express, React, and Node.js</li>
                  <li>• Developed RESTful APIs and authentication systems (JWT)</li>
                  <li>• Designed responsive UI using Tailwind CSS</li>
                </ul>
              </div>

              <div className="p-6 transition duration-300 bg-gray-800 rounded-2xl hover:bg-gray-700">
                <h4 className="text-xl font-bold">
                  Frontend Developer (Freelance / Personal Projects)
                </h4>
                <p className="text-sm text-gray-400">
                  2022 - 2023
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>• Built modern UI using React and JavaScript</li>
                  <li>• Integrated APIs and optimized performance</li>
                  <li>• Created responsive designs for mobile and desktop</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;