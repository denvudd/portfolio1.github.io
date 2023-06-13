import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const RTKQuery = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">RTK Query</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I create high-performance applications with optimized queries.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I know how to work with data validation and invalidation (tags
          system). I can apply all types of Query hooks.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I know how to handle, organize, and perform code splitting in API
          architectures. I can work with transformResponse.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I can type RTK Query.
        </li>
      </ul>
    </motion.div>
  );
};

export default RTKQuery;
