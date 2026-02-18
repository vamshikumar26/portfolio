import React from "react";
import { motion } from "framer-motion";
import { frameMotion } from "../utils/frameMotion";
import { LiaLinkSolid } from "react-icons/lia";
import { FaLink } from "react-icons/fa";

function Experience() {
  const experience = {
    company: "QUANINT TECHSOFT PVT LTD",
    logo: "data:image/jpeg;base64,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",
    role: "Software Development Intern",
    location: "Kondapur",
    startDate: "July 2024",
    endDate: "May 2025",
    details:  [
    "Developed full-stack features using Python, FastAPI, Streamlit and SQL/MongoDB databases.",
    "Implemented RAG pipelines and Docker containerization for scalable deployments.",
    "Deployed applications using Linux and maintained code quality with pytest and GitHub workflows.",
    "Built responsive frontends with HTML & CSS and interactive dashboards using Streamlit."
  ],
    skills: ["Python", "FastAPI", "SQL", "MongoDB", "RAG", "CSS", "HTML", "Docker", "Linux", "pytest", "GitHub", "Streamlit"],
  };

  return (
    <div
      id="experience"
      className="flex items-center flex-col min-h-full mt-32 p-4 justify-center overflow-hidden"
    >
      <div className=' text-4xl mb-5'>
            <h1 className=' text-center  mx-auto'>Work <span className='border-b-4 border border-l-transparent border-t-transparent border-r-transparent border-b-green-500'>Experience</span></h1>
        </div>
      <motion.div
        variants={frameMotion(0, 0, -200, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full lg:w-5/6 bg-gray-900 rounded-3xl shadow-xl p-6 md:p-10 transition-all duration-700 hover:-translate-y-3"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* LEFT: Company Logo */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-lg w-64 h-52 md:w-72 md:h-60 flex items-center justify-center">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="object-contain w-48 md:w-72 h-auto"
              />
            </div>
          </div>

          {/* RIGHT: Experience Details */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {experience.role}
            </h2>
            <h3 className="text-green-400 flex items-center text-xl mt-2 font-semibold">
              {experience.company} – [{experience.location}] <a href="https://letsmome.com/" target="_blank" className="mx-3"><FaLink /></a>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {experience.startDate} – {experience.endDate}
            </p>

            {/* Description Bullet Points */}
            <ul className="list-disc mt-5 text-gray-300 text-lg leading-8 pl-5 space-y-2">
              {experience.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap mt-6">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="textshadow m-1 text-xs text-green-500 p-1 pl-2 pr-2 rounded-lg bg-gray-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
