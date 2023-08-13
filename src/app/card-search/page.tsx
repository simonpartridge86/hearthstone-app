import { CardImage } from "@/components/CardImage";
import { PaginationButton } from "@/components/PaginationButton";
import { SearchContainer } from "@/components/SearchContainer";
import { getFilteredCards } from "@/utils/fetchFunctions";
import { paramsToQueryString } from "@/utils/helpers";
import { CardData, SearchParams } from "@/utils/types";
import { redirect } from "next/navigation";

type CardSearchProps = {
  searchParams: SearchParams;
};

const CardSearchPage: React.FC<CardSearchProps> = async ({ searchParams }) => {
  if (Object.keys(searchParams).length === 0) {
    redirect("/card-search?page=1");
  }

  const { page, ...otherParams } = searchParams;
  const pageNumber = Number(page);

  const queryString =
    Object.keys(otherParams).length !== 0
      ? paramsToQueryString(otherParams)
      : "";

  const { cards, pageCount }: { cards: CardData[]; pageCount: number } =
    await getFilteredCards(queryString, pageNumber);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchContainer />
      <div className="relative grid grid-cols-6 gap-x-6 gap-y-6 bg-dark2 p-6 pt-7 rounded-lg">
        {cards.length === 0 ? (
          <h1>No cards found</h1>
        ) : (
          cards?.map((card) => {
            return <CardImage card={card} key={card.id} />;
          })
        )}
      </div>
      {pageNumber > 1 && (
        <PaginationButton
          navTo={`/card-search?${queryString}page=${pageNumber - 1}`}
          text="Previous"
        />
      )}
      {pageNumber < pageCount && (
        <PaginationButton
          navTo={`/card-search?${queryString}page=${pageNumber + 1}`}
          text="Next"
        />
      )}
      {pageCount === 1 && <p>End of Results</p>}
    </main>
  );
};

export default CardSearchPage;
