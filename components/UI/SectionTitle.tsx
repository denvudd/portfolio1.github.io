import React from "react";

const SectionTitle = ({ num, title }: { num: string; title: string }) => {
  return (
    <h2 className="font-titleFont text-2xl font-semibold flex items-center">
      <span className="text-base md:text-lg text-textGreen mr-2">{num}.</span>
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[1px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
