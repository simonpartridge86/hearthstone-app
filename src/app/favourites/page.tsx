"use client";

import { CardContainer } from "@/components/CardContainer";
import { FavouriteButton } from "@/components/FavouriteButton";
import { SearchParams } from "@/utils/types";
import useStore from "@/utils/zustandStore";
import Image from "next/image";
import Link from "next/link";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">Home</Link>
      <Link href="/all-cards?limit=100">All Cards</Link>
      <CardContainer>
        {!favourites.length ? (
          <h2>No favourites yet</h2>
        ) : (
          favourites.map((favourite) => {
            return (
              <div key={favourite.id}>
                <Link href={`/card/${favourite.id}`}>
                  <Image
                    src={favourite.image}
                    width={150}
                    height={250}
                    alt="hearthstone card"
                  />
                </Link>
                <FavouriteButton id={favourite.id} image={favourite.image} />
              </div>
            );
          })
        )}
      </CardContainer>
    </main>
  );
};

export default FavouritesPage;
