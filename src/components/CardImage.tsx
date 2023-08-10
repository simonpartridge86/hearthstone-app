import { CardData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FavouriteButton } from "./FavouriteButton";

type CardImageProps = {
  card: CardData;
};

export const CardImage: React.FC<CardImageProps> = ({ card }) => {
  return (
    <div>
      <Link href={`/card/${card.id}`}>
        <Image
          key={card.id}
          src={card.image}
          width={150}
          height={250}
          alt="hearthstone card"
        />
      </Link>
      <FavouriteButton id={card.id} image={card.image} />
    </div>
  );
};
