import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 text-white md:px-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
          My <span className="text-green-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Existing Projects */}
          <ProjectCard
            title="Better-Life-Hospital"
            main="A hospital management system built in Java, featuring patient registration, appointment scheduling, and database integration for efficient healthcare management."
            demo="#"
            source="https://github.com/Asadul09/Better-Life-Hospital"
          />

          <ProjectCard
            title="Zombie-Attack-i-graphics"
            main="A 2D graphics-based game developed in C/C++, featuring zombie attack gameplay, player controls, and interactive graphics using graphics.h library."
            demo="#"
            source="https://github.com/Asadul09/Zombie-Attack-i-graphics-project"
          />

          <ProjectCard
            title="Exam-Enrollment-System"
            main="A Java-based Exam Enrollment System that allows students to register for exams, manage schedules, and track enrollment status efficiently."
            demo="#"
            source="https://github.com/Asadul09/Exam-Enrollment-System"
          />

          {/* New Projects */}
          <ProjectCard
            title="Hospital-Management-System"
            main="A Hospital Management System developed in PHP and MySQL, featuring patient management, appointment scheduling, and secure access for staff and admin."
            demo="#"
            source="https://github.com/Asadul09/Hospital-Management-System"
          />

          <ProjectCard
            title="Automated-Toll-Collection-System"
            main="An Automated Toll Collection System developed in C++, featuring vehicle detection, digital payment integration, and automatic record-keeping for efficient toll management."
            demo="#"
            source="https://github.com/Asadul09/Automated-Toll-Collection-System-"
          />

          <ProjectCard
            title="Smart IoT Healthcare"
            main="An IoT-based Smart Patient Health Monitoring System built with ESP32 and C++, featuring real-time vital sign tracking, cloud synchronization, and ECG arrhythmia detection."
            demo="#"
            source="https://github.com/Asadul09/Smart-IoT-Healthcare-Real-Time-Vital-Sign-Tracking-and-ECG-Arrhythmia-Detection"
          />

        

        </div>
      </div>
    </section>
  );
};

export default Projects;