import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import { useState } from "react";

import Javascript from "../experience/Javascript";
import React from "../experience/React";
import RTK from "../experience/RTK";
import Typescript from "../experience/Typescript";
import Tailwind from "../experience/Tailwind";
import Next from "../experience/Next";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <section
      id="experience"
      className="max-w-containerExtraSmall mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle num="02" title="What I have dealt with" />
      <motion.div
        className="w-full mt-10 flex flex-col md:flex-row gap-16"
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <ul className="md:w-38 flex flex-col">
          <li
            className={`border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 
            text-sm cursor-pointer duration-300 px-8 font-medium ${
              activeTab === "JavaScript"
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            }`}
            onClick={() => handleTabClick("JavaScript")}
          >
            JavaScript
          </li>
          <li
            className={`border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 
            text-sm cursor-pointer duration-300 px-8 font-medium ${
              activeTab === "React"
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            }`}
            onClick={() => handleTabClick("React")}
          >
            React
          </li>
          <li
            className={`border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 
            text-sm cursor-pointer duration-300 px-8 font-medium ${
              activeTab === "RTK" ? "border-l-textGreen" : "border-l-hoverColor"
            }`}
            onClick={() => handleTabClick("RTK")}
          >
            Redux Toolkit
          </li>
          <li
            className={`border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 
            text-sm cursor-pointer duration-300 px-8 font-medium ${
              activeTab === "TypeScript"
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            }`}
            onClick={() => handleTabClick("TypeScript")}
          >
            TypeScript
          </li>
          <li
            className={`border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 
            text-sm cursor-pointer duration-300 px-8 font-medium ${
              activeTab === "NextJS"
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            }`}
            onClick={() => handleTabClick("NextJS")}
          >
            Next.js
          </li>
          <li
            className={`border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 
            text-sm cursor-pointer duration-300 px-8 font-medium ${
              activeTab === "Tailwind"
                ? "border-l-textGreen"
                : "border-l-hoverColor"
            }`}
            onClick={() => handleTabClick("Tailwind")}
          >
            Tailwind CSS
          </li>
        </ul>
        {activeTab === "JavaScript" && <Javascript />}
        {activeTab === "React" && <React />}
        {activeTab === "RTK" && <RTK />}
        {activeTab === "TypeScript" && <Typescript />}
        {activeTab === "NextJS" && <Next />}
        {activeTab === "Tailwind" && <Tailwind />}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
