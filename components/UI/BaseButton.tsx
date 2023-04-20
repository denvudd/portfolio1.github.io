interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const BaseButton: React.FC<Props> = ({ children, className = "", onClick }) => {
  const defaultClasses =
    "w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300";

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`${defaultClasses} ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default BaseButton;
