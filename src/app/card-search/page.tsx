import { SearchContainer } from "@/components/SearchContainer";
import { PaginationButton } from "@/components/buttons/PaginationButton";
import { CardImage } from "@/components/card-images/CardImage";
import { getFilteredCards } from "@/utils/fetchFunctions";
import { paramsToQueryString } from "@/utils/helpers";
import { CardData, SearchParams } from "@/utils/types";
import { redirect } from "next/navigation";

type CardSearchProps = {
  searchParams: SearchParams;
};

const CardSearchPage: React.FC<CardSearchProps> = async ({ searchParams }) => {
  const { page, ...otherParams } = searchParams;
  if (!page) {
    redirect("/card-search?page=1");
  }
  const pageNumber = Number(page);

  const queryString =
    Object.keys(otherParams).length !== 0
      ? paramsToQueryString(otherParams)
      : "";

  console.log(queryString);

  const { cards, pageCount }: { cards: CardData[]; pageCount: number } =
    await getFilteredCards(queryString, pageNumber);

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-white pb-24 pt-36 dark:bg-dark1 xl:flex-row xl:items-start">
      <SearchContainer />
      <div className="flex flex-col items-center justify-center">
        <div className="flex-grow-1 relative grid grid-cols-2 gap-10 rounded-xl border-2 border-dark2 bg-white p-10 dark:bg-dark2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.length === 0 ? (
            <h1>No cards found</h1>
          ) : (
            cards?.map((card) => {
              return <CardImage card={card} key={card.id} />;
            })
          )}
        </div>
        <div className="flex items-center justify-center gap-4 py-4 ">
          {pageNumber > 1 && (
            <PaginationButton
              navTo={`/card-search?${queryString}page=${pageNumber - 1}`}
              text="Previous Page"
            />
          )}
          {pageNumber < pageCount && (
            <PaginationButton
              navTo={`/card-search?${queryString}page=${pageNumber + 1}`}
              text="Next Page"
            />
          )}
          {pageCount === 1 && <p>End of Results</p>}
        </div>
      </div>
    </main>
  );
};

export default CardSearchPage;
