import { CardBack } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type CardBackImageProps = {
  cardBack: CardBack;
};

export const CardBackImage: React.FC<CardBackImageProps> = ({ cardBack }) => {
  return (
    <Link href="/cards?limit=20">
      <Image
        key={cardBack.id}
        src={cardBack.image}
        width={150}
        height={250}
        alt="hearthstone card back"
      />
    </Link>
  );
};
