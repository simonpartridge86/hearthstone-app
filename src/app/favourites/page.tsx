"use client";

import { CardImage } from "@/components/CardImage";
import { SearchParams } from "@/utils/types";
import useStore from "@/utils/zustandStore";
import { redirect } from "next/navigation";

type FavouritesPageProps = {
  searchParams: SearchParams;
};

const FavouritesPage: React.FC<FavouritesPageProps> = ({ searchParams }) => {
  if (Object.keys(searchParams).length !== 0) {
    redirect("/favourites");
  }
  const { favourites } = useStore();

  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-5 bg-white p-12 pt-28 dark:bg-dark1 xs:pt-24 sm:pt-20">
      <h2>Favourites</h2>
      {!favourites.length ? (
        <h2>No favourites selected yet</h2>
      ) : (
        <div className="relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-lg border-2 border-dark2 bg-white p-6 pt-7 dark:bg-dark2 xs:grid-cols-4 md:grid-cols-6">
          {favourites.map((favourite) => {
            return <CardImage card={favourite} key={favourite.id} />;
          })}
        </div>
      )}
    </main>
  );
};

export default FavouritesPage;
