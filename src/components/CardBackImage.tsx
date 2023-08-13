"use client";

import { CardBack } from "@/utils/types";
import useStore from "@/utils/zustandStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardBackImageProps = {
  cardBack: CardBack;
};

export const CardBackImage: React.FC<CardBackImageProps> = ({ cardBack }) => {
  const router = useRouter();
  const { setCardBack } = useStore();

  const handleClick = () => {
    setCardBack(cardBack.image);
    router.push(`/all-cards?limit=100`);
  };

  return (
    <div onClick={handleClick}>
      <Image
        key={cardBack.id}
        src={cardBack.image}
        width={150}
        height={250}
        alt="hearthstone card back"
      />
    </div>
  );
};
