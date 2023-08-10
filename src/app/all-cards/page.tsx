import { CardContainer } from "@/components/CardContainer";
import { CardImage } from "@/components/CardImage";
import { TriggerLoad } from "@/components/TriggerLoad";
import { getCards } from "@/utils/fetchFunctions";
import { CardData } from "@/utils/types";
import Link from "next/link";

type CardBrowserProps = {
  searchParams: { limit: string };
};

const AllCardsPage: React.FC<CardBrowserProps> = async ({ searchParams }) => {
  const limit = Number(searchParams.limit);
  const { cards }: { cards: CardData[] } = await getCards(limit);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>View All Cards</h1>
      <Link href="/">Home</Link>
      <Link href="/card-search?page=1">Card Search</Link>
      <Link href="/favourites">Favourites</Link>
      <CardContainer>
        {cards?.map((card) => {
          return <CardImage card={card} key={card.id} />;
        })}
        <TriggerLoad limit={limit} />
      </CardContainer>
    </main>
  );
};

export default AllCardsPage;
