import { BackButton } from "@/components/BackButton";
import { getCard } from "@/utils/fetchFunctions";
import Image from "next/image";

type PageProps = {
  params: { id: string };
};

const CardPage: React.FC<PageProps> = async ({ params }) => {
  const card = await getCard(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BackButton />
      <Image src={card.image} alt={card.name} width={300} height={500}></Image>
      <h1 className="text-4xl font-bold">Name: {card.name}</h1>
      <p className="text-2xl">Text: {card.text}</p>
      <p className="text-2xl">Artist: {card.artistName}</p>
    </main>
  );
};

export default CardPage;
