import { CardData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type CardImageProps = {
  card: CardData;
};

export const CardImage: React.FC<CardImageProps> = ({ card }) => {
  return (
    <Link href={`/card/${card.id}`}>
      <Image
        key={card.id}
        src={card.image}
        width={150}
        height={250}
        alt="hearthstone card"
      />
    </Link>
  );
};
