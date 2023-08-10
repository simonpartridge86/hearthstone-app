import { CardContainer } from "@/components/CardContainer";
import { CardImage } from "@/components/CardImage";
import { getFilteredCards } from "@/utils/fetchFunctions";
import { CardData } from "@/utils/types";
import Link from "next/link";

type CardBrowserProps = {
  searchParams: { page: string };
};

const CardSearchPage: React.FC<CardBrowserProps> = async ({ searchParams }) => {
  const pageNumber = Number(searchParams.page);
  const { cards, pageCount }: { cards: CardData[]; pageCount: number } =
    await getFilteredCards(pageNumber);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Card Library
      <Link href="/">Home</Link>
      <Link href="/all-cards?limit=100  ">All Cards</Link>
      <CardContainer>
        {cards?.map((card) => {
          return <CardImage card={card} key={card.id} />;
        })}
      </CardContainer>
      {pageNumber > 1 && (
        <Link href={`/card-search?page=${pageNumber - 1}`}>Previous</Link>
      )}
      {pageNumber !== pageCount && (
        <Link href={`/card-search?page=${pageNumber + 1}`}>Next</Link>
      )}
    </main>
  );
};

export default CardSearchPage;
