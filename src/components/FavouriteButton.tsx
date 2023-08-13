"use client";

import useStore from "@/utils/zustandStore";
import { HeartIcon } from "./icons";

type FavouriteButtonProps = {
  id: number;
  image: string;
};

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({
  id,
  image,
}) => {
  const { favourites, addFavourite, removeFavourite } = useStore();

  const isFavourite = favourites.some((item) => item.id === id);

  const handleClick = () => {
    if (!isFavourite) {
      addFavourite({ id, image });
    } else {
      removeFavourite(id);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-circle btn-outline btn-xs absolute right-[-10px] top-[-10px] text-white hover:bg-white ${
        isFavourite
          ? "bg-green hover:border-green hover:text-green"
          : "bg-gray hover:border-none  hover:text-gray dark:bg-dark2 dark:hover:bg-white dark:hover:text-dark2"
      }`}
    >
      <HeartIcon />
    </button>
  );
};
