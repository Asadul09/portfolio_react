import React from "react";
import avaterImg from "../../assets/1584784.png";
import TextChange from "../Projects/TextChange";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen px-6 text-white md:px-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="grid items-center w-full max-w-6xl gap-12 mx-auto md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            <TextChange />
          </h1>

          <p className="mt-6 text-lg text-gray-300 md:text-2xl">
            I build modern, scalable, and responsive full-stack web applications
            using the MERN Stack.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#footer">
              <button className="px-6 py-3 font-semibold transition duration-300 bg-green-500 hover:bg-green-600 rounded-3xl hover:scale-105">
                Contact Me
              </button>
            </a>

            <a href="#projects">
              <button className="px-6 py-3 font-semibold text-green-400 transition duration-300 border border-green-500 hover:bg-green-500 hover:text-white rounded-3xl hover:scale-105">
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={avaterImg}
            alt="Developer Avatar"
            className="transition duration-500 w-72 md:w-96 drop-shadow-2xl hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;