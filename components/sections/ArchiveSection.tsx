import { useState } from "react";
import ArchiveCard from "../UI/ArchiveCard";
import { motion } from "framer-motion";
import BaseButton from "../UI/BaseButton";

const ArchiveSection = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="archive" className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10"
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <ArchiveCard
          title="Weather Foreact App"
          description="A web application that shows the current weather and also displays
          the weather forecast for the next week. You can check the weather
          by simply entering the name of the city."
          technologies={["React", "API", "Talwind", "Luxon", "Tostify"]}
          link="https://denvudd.github.io/react-quiz-app.github.io/"
        />
        <ArchiveCard
          title="React Quiz Application"
          description="A small application that allows to take a quiz and answer questions
            on various topics. The data for the questions is taken from the
            OpenTrivia DB."
          technologies={["React", "Redux", "API", "Axios", "MUI"]}
          link="https://denvudd.github.io/react-quiz-app.github.io/"
        />
        <ArchiveCard
          title="Markup Editor"
          description="A simple Markup editor that converts raw text to formatted text. 
          It has light and dark themes. It utilizes React Context, React Markup and other tools. "
          technologies={["React Context", "TypeScript", "Tailwind"]}
          link="https://denvudd-markup-editor.netlify.app/"
        />
        <ArchiveCard
          title="Speed Typing Game"
          description="[Educational Project], a game for practicing typing speed within a certain time frame. At the end, 
          it shows accuracy, number of errors, and the number of typed characters. "
          technologies={["React", "TypeScript", "Tailwind CSS"]}
          link="https://denvudd-speedtyping-game.netlify.app/"
        />
        <ArchiveCard
          title="Marvel Comics Catalog"
          description="[Educational project], a Marvel comic book catalog application. You can
          view comics of characters, select a random one, or search for a specific
          one. Powered by Marvel API."
          technologies={["React", "Formik", "Yup", "React Helmet"]}
          link="https://denvudd.github.io/marvel-app.io/"
        />
        <ArchiveCard
          title="Pomodoro Timer App"
          description="A simple timer application that works using the Pomodoro technique. You
          can customize the time, pause and start the timer. At each launch, a corresponding message is displayed."
          technologies={["React", "React Slider", "React Progress"]}
          link="https://denvudd.github.io/pomodoro.github.io/"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Slider Section Website"
                description="A simple but interesting website for selling educational materials. Two
      pages were created, each section of which switches in a slider. Using YouTube API."
                technologies={["JavaScript", "OOP", "API", "Gulp", "Webpack"]}
                link="https://denvudd.github.io/loan.github.io/"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Photo Gallery Appliaction"
                description="A small photo gallery collections application. You can sort them by
          category, switch between pages or find a collection by its name. Photos and data 
          are taken from a Mock-API."
                technologies={["React", "Mock-API", "SASS"]}
                link="https://denvudd.github.io/photos.github.io/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Food Website on Pure JS"
                description=" A website that offers healthy meal plans. It has interactive elements,
          and you can also calculate your daily calorie intake and fill out a
          form."
                technologies={["JavaScript", "PHP", "Calculate"]}
                link="https://denvudd.github.io/food.github.io/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Own UI Library on Pure JS"
                description="Custom UI library in pure JavaScript using prototype inheritance. You
          can work with classes, events, and also use ready-made
          components such as carousel, collapse, and dropdown."
                technologies={["JavaScript", "Prototype Inheritance"]}
                link="https://denvudd.github.io/ui-library-example.github.io/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Website for art pictures"
                description="A website for selling artworks. You can view samples
                of works, and also calculate the cost of the painting
                through a special calculator or submit a request for feedback."
                technologies={["JavaScript", "Gulp", "Webpack", "Less"]}
                link="https://denvudd.github.io/ui-library-example.github.io/"
              />
            </motion.div>
          </>
        )}
      </motion.div>
      <div className="mt-12 flex items-center justify-center">
        <BaseButton onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </BaseButton>
      </div>
    </section>
  );
};

export default ArchiveSection;
