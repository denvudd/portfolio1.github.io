import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Tailwind = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">Tailwind CSS</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Create beautiful style rules and layouts
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I can create my own customized Tailwind configs, with custom settings
          and extensions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I can use Components, Templates, and just regular Tailwind CSS classes
          and rules for beautiful styling of components and pages
        </li>
      </ul>
    </motion.div>
  );
};

export default Tailwind;
