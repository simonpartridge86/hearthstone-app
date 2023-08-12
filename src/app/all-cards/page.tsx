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
    <main className="pt-24 flex min-h-screen flex-col p-12 pt-6 items-center gap-y-5">
      <h2>Browse all cards by scrolling</h2>
      <div className="relative grid grid-cols-6 gap-x-6 gap-y-6 bg-dark2 p-6 pt-7 rounded-lg">
        {cards.length === 0 ? (
          <h1>No cards found</h1>
        ) : (
          cards?.map((card) => {
            return <CardImage card={card} key={card.id} />;
          })
        )}
      </div>
      <TriggerLoad limit={limit} />
    </main>
  );
};

export default AllCardsPage;
