"use client";

type BasicButtonProps = {
  onClick: () => void;
  text: string;
};

const BasicButton: React.FC<BasicButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="btn btn-outline btn-xs border-green bg-transparent text-dark3 hover:border-green hover:bg-green hover:text-white dark:text-white dark:hover:bg-green"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BasicButton;
