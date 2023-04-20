import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Javascript = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">JavaScript</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, efficient, and optimized code for various projects
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I am proficient in working with various libraries, plugins,
          extensions, and supersets of JS, such as React, Redux Toolkit,
          Next.js, TypeScript, Swiper/Slick Slider, and other popular tools.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have an understanding of key topics, such as: data types, type
          conversion, functions, objects, recursion, closure, context,
          prototypical inheritance, classes, promises and asynchronous
          operations, and modules.
        </li>
      </ul>
    </motion.div>
  );
};

export default Javascript;
