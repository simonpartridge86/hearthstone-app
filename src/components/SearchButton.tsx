"use client";

type SearchButtonProps = {
  onSubmit: () => void;
};

export const SearchButton: React.FC<SearchButtonProps> = ({ onSubmit }) => {
  return <button onClick={onSubmit}>SearchButton</button>;
};
