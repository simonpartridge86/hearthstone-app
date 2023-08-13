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

  return (
    <button
      className="w-sm btn btn-outline btn-xs border-green bg-transparent text-green hover:border-green hover:bg-green hover:text-white dark:text-white dark:hover:bg-green"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
