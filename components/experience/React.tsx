import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const React = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">React</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Create modern, optimized React web applications that support key
          architectural patterns and unwritten rules and agreements among
          developers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I understand and adhere to basic foundational concepts when developing
          applications, while also striving for a visually appealing and
          user-friendly interface. I understand main tools such as React Router,
          React Helmet, Yup/Formik, React Transition Group/Framer Motion, React
          Slider etc.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have an understanding of key topics, such as: JSX, Error Boundary,
          working with APIs, class components and hooks, Higher-Order Components
          (HOC), component lifecycle, and state lifting.
        </li>
      </ul>
    </motion.div>
  );
};

export default React;
