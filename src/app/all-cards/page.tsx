import { CardImage } from "@/components/CardImage";
import { TriggerLoad } from "@/components/TriggerLoad";
import { getCards } from "@/utils/fetchFunctions";
import { CardData } from "@/utils/types";
import { redirect } from "next/navigation";

type CardBrowserProps = {
  searchParams: { page: string };
};

const AllCardsPage: React.FC<CardBrowserProps> = async ({ searchParams }) => {
  const page = Number(searchParams.page);
  if (!page) {
    redirect("/all-cards?page=1");
  }

  const { cards, pageCount }: { cards: CardData[]; pageCount: number } =
    await getCards(page);

  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      {!cards || cards.length === 0 ? (
        <h2>No cards found</h2>
      ) : (
        <>
          <h2>Scroll down to browse all cards:</h2>
          <div className="relative grid grid-cols-2 gap-10 rounded-xl border-2 border-dark2 bg-white p-10 dark:bg-dark2 md:grid-cols-4 xl:grid-cols-6">
            {cards?.map((card) => {
              return <CardImage card={card} key={card.id} />;
            })}
          </div>
        </>
      )}
      {cards.length !== 0 && page < pageCount && <TriggerLoad page={page} />}
    </main>
  );
};

export default AllCardsPage;
