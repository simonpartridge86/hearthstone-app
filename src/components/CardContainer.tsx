type CardContainerProps = {
  children: React.ReactNode;
};

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <div className="grid grid-cols-5 gap-x-6 gap-y-10">{children}</div>;
};
