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

  const HeartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );

  return isFavourite ? (
    <button
      onClick={handleClick}
      className="btn btn-circle btn-xs btn-outline absolute top-[-10px] right-[-10px] bg-green text-white hover:bg-white hover:text-green hover:border-green"
    >
      {HeartIcon}
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="btn btn-circle btn-xs btn-outline absolute top-[-10px] right-[-10px] text-white bg-dark2 hover:bg-white hover:text-dark1 hover:border-none"
    >
      {HeartIcon}
    </button>
  );
};
