/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import Image from "next/image";
import { screenshot1 } from "@/public/assets";
import { screenshot2 } from "@/public/assets";
import { screenshot3 } from "@/public/assets";
import { screenshot4 } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle num="03" title="Some Thing I have Built" />
      <motion.div
        className="w-full flex flex-col items-center justify-center gap-28 mt-10"
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://react-todo-app-denvudd.netlify.app/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
            title="Open live project"
          >
            <div>
              <Image
                src={screenshot3}
                alt="Project 1"
                className="w-full h-full object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:-ml-16 z-10"
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Todo Application</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A Todo web application that allows creating a list of tasks that
              need to be done. Additionally, you can choose the color, category,
              and importance of the task, as well as add a description if
              desired or rearrange the order of the tasks using the
              implementation of Drag & Drop.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark"
            >
              <li>React</li>
              <li>Redux RTK</li>
              <li>Redux Persist</li>
              <li>React DND</li>
              <li>Framer Motion</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/denvudd/react-todo-app.github.io"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open GitHub Repo"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://react-todo-app-denvudd.netlify.app/"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open live project"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href="denvudd.github.io/react-games.github.io/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
            title="Open live project"
          >
            <div>
              <Image
                src={screenshot4}
                alt="Project 2"
                className="w-full h-full object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right z-10"
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Games Catalog</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
              A website with a catalog of video games where you can browse games
              by categories such as "Popular by Users", "Popular by Metacritic",
              and also by genre, platform, and tags, such as "Singleplayer", "2
              players". For each individual game, you can view detailed
              information.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark"
            >
              <li>React</li>
              <li>RAWG API</li>
              <li>React Router</li>
              <li>React Image Gallery</li>
              <li
                className="hover:text-textGreen duration-300 inline-flex relative cursor-pointer h-6 
              overflow-x-hidden group"
              >
                <a href="https://github.com/denvudd/react-games.github.io/blob/master/package.json">
                  ...view other tools
                </a>
                <span
                  className="absolute w-full h-[1px] bg-textGreen left-0 bottom-0 -translate-x-[110%] 
                group-hover:translate-x-0 transition-transform duration-500"
                ></span>
              </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/denvudd/react-games.github.io"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open GitHub Repo"
              >
                <TbBrandGithub />
              </a>
              <a
                href="denvudd.github.io/react-games.github.io/"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open live project"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://denvudd.github.io/react-weather-app.github.io/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
            title="Open live project"
          >
            <div>
              <Image
                src={screenshot1}
                alt="Project 1"
                className="w-full h-full object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right xl:-ml-16 z-10"
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Weather Foreact Application
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A web application that shows the current weather and also displays
              the weather forecast for the next week. You can check the weather
              by simply entering the name of the city in the search bar or you
              can view the weather by determining the user's current
              geolocation.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark"
            >
              <li>React</li>
              <li>Open Weather API</li>
              <li>React Tostify</li>
              <li>Luxon</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/denvudd/react-weather-app.github.io"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open GitHub Repo"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://denvudd.github.io/react-weather-app.github.io/"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open live project"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href="https://denvudd.github.io/pictures.github.io/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
            title="Open live project"
          >
            <div>
              <Image
                src={screenshot2}
                alt="Project 2"
                className="w-full h-full object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
            items-end text-right z-10"
          >
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Website for art pictures</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
              A website for selling hand-painted artworks. You can view samples
              of works, reviews, and also calculate the cost of the painting
              through a special calculator or submit a request for feedback.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
              md:gap-5 justify-between text-textDark"
            >
              <li>JavaScript</li>
              <li>Gulp</li>
              <li>Webpack</li>
              <li>Less</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/denvudd/pictures.github.io"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open GitHub Repo"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://denvudd.github.io/pictures.github.io/"
                className="hover:text-textGreen duration-300"
                target="_blank"
                title="Open live project"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;