import { CardData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FavouriteButton } from "./FavouriteButton";

type CardImageProps = {
  card: CardData;
};

export const CardImage: React.FC<CardImageProps> = ({ card }) => {
  return (
    <div className="bg-dark4 rounded-lg pb-2 pl-1 flex justify-center items-center relative hover:bg-grey">
      <div className="relative">
        <Link href={`/card/${card.id}`} className="relative">
          <Image
            key={card.id}
            src={card.image}
            width={150}
            height={250}
            alt="hearthstone card"
          />
        </Link>
      </div>
      <FavouriteButton id={card.id} image={card.image} />
    </div>
  );
};
