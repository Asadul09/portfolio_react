import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demo, source }) => {
  return (
    <div className="flex flex-col overflow-hidden transition duration-500 bg-gray-800 shadow-lg rounded-2xl hover:shadow-green-500/20 hover:scale-105">

      {/* Image */}
      <img
        src={bannerImg}
        alt={title}
        className="object-cover w-full h-48"
      />

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6">
        
        {/* Text */}
        <div>
          <h3 className="mb-3 text-2xl font-bold">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            {main}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 text-sm font-semibold text-center transition duration-300 bg-green-500 rounded-full hover:bg-green-600"
            >
              Live Demo
            </a>
          )}

          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 text-sm font-semibold text-center text-green-400 transition duration-300 border border-green-500 rounded-full hover:bg-green-500 hover:text-white"
            >
              Source
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;