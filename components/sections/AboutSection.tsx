import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { avatar } from "@/public/assets";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle num="01" title="About me" />
      <motion.div
        className="flex flex-col lgl:flex-row gap-16"
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <div
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex 
        flex-col gap-4"
        >
          <p>
            Hello, my name is Dima and I enjoy creating websites and web
            applications! I strive to produce{" "}
            <span className="text-textGreen">
              high-quality, visually appealing, and functional results,
            </span>{" "}
            with the most important goal of ensuring a pleasant user experience.
            I became interested in web development a year ago when I attempted
            to code my first website. Since then, I have been studying markup
            languages and I am currently actively learning other technologies!
          </p>
          <p>
            I am currently actively learning development tools such as React,
            Redux RTK, Next.js, and TypeScript, and in the future, I also want
            to become familiar with technologies such as databases and their
            interactions (MongoDB etc.), PHP, and other back-end technologies
            (in addition to front-end, of course).{" "}
            <span className="text-textGreen">
              I am actively seeking my first job
            </span>{" "}
            to gain practical development experience, as well as the opportunity
            to work in a team with other like-minded enthusiasts.
          </p>
          <p>Here are a few technologies that I am currently studying:</p>
          <ul className="ma-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-3 mt-6">
            <div className="grid grid-rows-2 gap-3">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <SiJavascript />
                </span>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <SiReact />
                </span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <SiRedux />
                </span>
                Redux Toolkit
              </li>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <SiTypescript />
                </span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <SiNextdotjs />
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <SiTailwindcss />
                </span>
                Tailwind CSS
              </li>
            </div>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover object-top"
                src={avatar}
                alt="avatar"
                width={380}
                height={385}
                loading="lazy"
              />
              <div
                className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20
              rounded-md top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
          <div
            className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
              rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform
              duration-300"
          ></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
