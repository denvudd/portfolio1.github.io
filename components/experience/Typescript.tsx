import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Typescript = () => {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="font-medium text-xl font-titleFont">
        <span className="text-textGreen tracking-wide">TypeScript</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I am capable of applying code typing not just for the sake of it, but
          for the purpose of achieving desired results.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I understand the basic concepts of TypeScript, its intended use, and
          the problems it helps solve.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I have an understanding of topics such as: type annotations, data
          types, Typing Objects & Arrays, Tuples, Union, Narrowing, Type
          aliases, Intersection, Types & Interfaces, Enums, working with DOM,
          Generics, classes.
        </li>
      </ul>
    </motion.div>
  );
};

export default Typescript;
