import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Next = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">Next.js</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I strive to use all the key benefits provided by Next.js and create
          optimized, SEO-friendly web applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I understand the main issues that Next.js solves, and I use its main
          advantages such as Routing, Layouts, Image & Font Optimization, Server
          Side Rendering (SSR), Static File Serving, and so on to create
          optimized web applications.
        </li>
      </ul>
    </motion.div>
  );
};

export default Next;
