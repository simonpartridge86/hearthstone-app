import { CardContainer } from "@/components/CardContainer";
import { CardImage } from "@/components/CardImage";
import { TriggerLoad } from "@/components/TriggerLoad";
import { getCards } from "@/utils/fetchFunctions";
import { CardData } from "@/utils/types";
import { redirect } from "next/navigation";

type CardBrowserProps = {
  searchParams: { limit: string };
};

const AllCardsPage: React.FC<CardBrowserProps> = async ({ searchParams }) => {
  const limit = Number(searchParams.limit);
  if (!limit) {
    redirect("/all-cards?limit=50");
  }

  const { cards }: { cards: CardData[] } = await getCards(limit);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardContainer>
        {cards.length === 0 ? (
          <h1>No cards found</h1>
        ) : (
          cards?.map((card) => {
            return <CardImage card={card} key={card.id} />;
          })
        )}
        <TriggerLoad limit={limit} />
      </CardContainer>
    </main>
  );
};

export default AllCardsPage;
