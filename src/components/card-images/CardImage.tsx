import { CardData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FavouriteButton } from "../buttons/FavouriteButton";

type CardImageProps = {
  card: CardData;
};

export const CardImage: React.FC<CardImageProps> = ({ card }) => {
  return (
    <div className="relative flex items-center justify-center rounded-xl bg-gray pb-2 pl-1 dark:bg-dark4">
      <div className="relative">
        <Link href={`/card/${card.id}`} className="relative">
          <Image
            key={card.id}
            src={card.image}
            width={200}
            height={300}
            alt="hearthstone card"
          />
        </Link>
      </div>
      <FavouriteButton card={card} />
    </div>
  );
};
