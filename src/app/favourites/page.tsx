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
    <main className="flex min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      <h2>Favourites</h2>
      {!favourites.length ? (
        <h2>No favourites selected yet</h2>
      ) : (
        <div className="relative grid grid-cols-2 gap-10 rounded-lg border-2 border-dark2 bg-white p-10 dark:bg-dark2 xs:grid-cols-4 md:grid-cols-6">
          {favourites.map((favourite) => {
            return <CardImage card={favourite} key={favourite.id} />;
          })}
        </div>
      )}
    </main>
  );
};

export default FavouritesPage;
