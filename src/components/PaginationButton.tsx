"use client";

import { useRouter } from "next/navigation";

type SearchButtonProps = {
  navTo: string;
  text: string;
};

export const PaginationButton: React.FC<SearchButtonProps> = ({
  navTo,
  text,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.replace(navTo);
  };

  return <button onClick={handleClick}>{text}</button>;
};
