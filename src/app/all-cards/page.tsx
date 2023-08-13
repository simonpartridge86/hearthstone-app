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
    <main className="flex min-h-screen flex-col items-center gap-y-5 bg-white p-12 pt-28 dark:bg-dark1 xs:pt-24 sm:pt-20">
      <h2>Scroll down to browse all cards:</h2>
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-lg border-2 border-dark2 bg-white p-6 pt-7 dark:bg-dark2 xs:grid-cols-4 md:grid-cols-6">
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
