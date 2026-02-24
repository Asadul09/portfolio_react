import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 text-white bg-gradient-to-b from-black via-gray-900 to-black md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl">
          About <span className="text-green-400">Me</span>
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-green-400">
              MERN Stack Developer
            </h3>

            <p className="mb-6 leading-relaxed text-gray-300">
              I am a passionate MERN Stack Developer with strong expertise in
              building scalable and responsive web applications using MongoDB,
              Express.js, React.js, and Node.js. I enjoy transforming ideas into
              real-world digital solutions that are efficient, user-friendly,
              and performance-optimized.
            </p>

            <p className="mb-6 leading-relaxed text-gray-300">
              Currently pursuing my BSc in Computer Science, I have developed
              multiple full-stack projects that demonstrate my ability to
              design RESTful APIs, implement authentication systems, manage
              databases, and build modern UI/UX interfaces using React.
            </p>

            <p className="leading-relaxed text-gray-300">
              My goal is to work on impactful projects where I can contribute
              as a developer, grow professionally, and solve real-world
              problems through technology.
            </p>
          </div>

          {/* Right Skills Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 text-center transition duration-300 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700">
              <FaReact className="mx-auto mb-3 text-4xl text-cyan-400" />
              <h4 className="font-semibold">React.js</h4>
            </div>

            <div className="p-6 text-center transition duration-300 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700">
              <FaNodeJs className="mx-auto mb-3 text-4xl text-green-500" />
              <h4 className="font-semibold">Node.js</h4>
            </div>

            <div className="p-6 text-center transition duration-300 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700">
              <SiExpress className="mx-auto mb-3 text-4xl text-gray-400" />
              <h4 className="font-semibold">Express.js</h4>
            </div>

            <div className="p-6 text-center transition duration-300 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700">
              <SiMongodb className="mx-auto mb-3 text-4xl text-green-600" />
              <h4 className="font-semibold">MongoDB</h4>
            </div>

            <div className="p-6 text-center transition duration-300 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700">
              <SiJavascript className="mx-auto mb-3 text-4xl text-yellow-400" />
              <h4 className="font-semibold">JavaScript</h4>
            </div>

            <div className="p-6 text-center transition duration-300 bg-gray-800 rounded-xl hover:scale-105 hover:bg-gray-700">
              <FaGitAlt className="mx-auto mb-3 text-4xl text-orange-500" />
              <h4 className="font-semibold">Git & GitHub</h4>
            </div>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-semibold text-green-400">
            What I Do
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700">
              <h4 className="mb-3 text-xl font-semibold">
                Full Stack Development
              </h4>
              <p className="text-gray-300">
                Build complete web applications from frontend UI to backend
                APIs and database integration.
              </p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700">
              <h4 className="mb-3 text-xl font-semibold">
                REST API Development
              </h4>
              <p className="text-gray-300">
                Design and implement secure and scalable RESTful APIs using
                Node.js and Express.
              </p>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700">
              <h4 className="mb-3 text-xl font-semibold">
                Responsive UI Design
              </h4>
              <p className="text-gray-300">
                Create modern, responsive, and interactive user interfaces
                using React and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;