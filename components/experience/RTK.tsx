import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const RTK = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">Redux Toolkit</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I create optimized and high-performance Redux Toolkit applications
          with support for modern standards.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I understand the concepts and philosophy of Redux, as well as all of
          its benefits and advantages as a state manager.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have a basic understanding of topics such as: architecture and
          concepts of Redux (Store, Reducer, Actions, Dispatch Selectors,
          Middleware, Entities), as well as Redux Toolkit (Reducers and Actions,
          Slices, AsyncThunk).
        </li>
      </ul>
    </motion.div>
  );
};

export default RTK;
