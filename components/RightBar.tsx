const RightBar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:dmitry.yurin2020@gmail.com" className="h-[105px]">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          dmitry.yurin2020@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-40 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightBar;
