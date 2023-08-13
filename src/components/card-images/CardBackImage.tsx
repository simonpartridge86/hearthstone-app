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
    router.push(`/all-cards`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Image
        key={cardBack.id}
        src={cardBack.image}
        width={200}
        height={300}
        alt="hearthstone card back"
      />
    </div>
  );
};
