"use client";

import { useRouter } from "next/navigation";

export const ClearFiltersButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace(`/card-search?page=1`);
    //also update filters state in zustand
  };

  return <button onClick={handleClick}>Clear Filters</button>;
};
