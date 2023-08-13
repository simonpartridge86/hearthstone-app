"use client";

type BasicButtonProps = {
  onClick: () => void;
  text: string;
};

const BasicButton: React.FC<BasicButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default BasicButton;
