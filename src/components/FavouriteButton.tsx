"use client";

import useStore from "@/utils/zustandStore";

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
    <button onClick={handleClick}>
      {!isFavourite ? "Add to Favourites" : "Remove Favourite"}
    </button>
  );
};
