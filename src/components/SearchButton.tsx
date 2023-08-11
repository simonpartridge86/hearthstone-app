"use client";

import { paramsToQueryString } from "@/utils/helpers";
import { SearchParams } from "@/utils/types";
import { useRouter } from "next/navigation";

type SearchObj = Omit<SearchParams, "page">;

type SearchButtonProps = {
  searchObj: SearchObj;
};

export const SearchButton: React.FC<SearchButtonProps> = ({ searchObj }) => {
  const router = useRouter();

  const queryString =
    Object.keys(searchObj).length !== 0 ? paramsToQueryString(searchObj) : "";

  const handleClick = () => {
    router.replace(`/card-search?${queryString}&page=1`);
  };

  return <button onClick={handleClick}>SearchButton</button>;
};
