import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ANTD = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">Ant Design</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I am proficient in working with all components, hooks, and styles of
          the library.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I can resolve compatibility issues with other libraries, optimize the
          final bundle, and streamline development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have the ability to customize components and create visually
          appealing UI solutions using the library.
        </li>
      </ul>
    </motion.div>
  );
};

export default ANTD;
