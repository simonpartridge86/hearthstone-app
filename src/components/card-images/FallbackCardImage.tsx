"use client";

import useStore from "@/utils/zustandStore";
import Image from "next/image";

type FallbackCardImageProps = {
  id: number;
};

export const FallbackCardImage: React.FC<FallbackCardImageProps> = ({ id }) => {
  const { cardBack } = useStore();

  return (
    <div className="relative flex items-center justify-center rounded-xl">
      <Image
        key={`default-${id}`}
        src={cardBack || "/default.png"}
        width={200}
        height={300}
        alt="classic card back"
      />
      <div className="absolute right-[-10px] top-[-10px] rounded-full bg-green">
        <span className="loading loading-spinner loading-md mx-[6px] mt-[6px] text-white"></span>
      </div>
    </div>
  );
};
