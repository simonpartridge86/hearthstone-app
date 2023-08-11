import { CardContainer } from "@/components/CardContainer";
import { CardImage } from "@/components/CardImage";
import { PaginationButton } from "@/components/PaginationButton";
import { SearchContainer } from "@/components/SearchContainer";
import { getFilteredCards } from "@/utils/fetchFunctions";
import { paramsToQueryString } from "@/utils/helpers";
import { CardData, SearchParams } from "@/utils/types";
import Link from "next/link";

type CardBrowserProps = {
  searchParams: SearchParams;
};

const CardSearchPage: React.FC<CardBrowserProps> = async ({ searchParams }) => {
  const { page, ...otherParams } = searchParams;

  const queryString =
    Object.keys(otherParams).length !== 0
      ? paramsToQueryString(otherParams)
      : "";

  const pageNumber = Number(page);

  const { cards, pageCount }: { cards: CardData[]; pageCount: number } =
    await getFilteredCards(queryString, pageNumber);

  console.log("pageCount", pageCount);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Card Library
      <Link href="/">Home</Link>
      <Link href="/all-cards?limit=100  ">All Cards</Link>
      <SearchContainer />
      <CardContainer>
        {cards.length === 0 ? (
          <h1>No cards found</h1>
        ) : (
          cards?.map((card) => {
            return <CardImage card={card} key={card.id} />;
          })
        )}
      </CardContainer>
      {pageNumber > 1 && (
        <PaginationButton
          navTo={`/card-search?${queryString}page=${pageNumber - 1}`}
          text="Next"
        />
      )}
      {pageNumber < pageCount && (
        <PaginationButton
          navTo={`/card-search?${queryString}page=${pageNumber + 1}`}
          text="Previous"
        />
      )}
      {pageCount === 1 && <p>Page 1 of 1 </p>}
    </main>
  );
};

export default CardSearchPage;
