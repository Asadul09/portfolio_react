import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 text-white md:px-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto">

       
        <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
          My <span className="text-green-400">Projects</span>
        </h2>

        
        <div className="grid gap-10 md:grid-cols-3">

          
          <ProjectCard
            title="VivaBot – AI Interview Preparation Platform"
            main="A real-time AI-powered mock interview web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features resume analysis, AI-generated interview questions, speech-based interview simulation, performance feedback reports, authentication, interview history, and credit-based interview attempts."
            demo="https://vivabot-lake.vercel.app"
            source="https://github.com/Asadul09/VivaBot"
          />

          
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
