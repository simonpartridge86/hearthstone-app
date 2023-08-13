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
  console.log(searchParams);
  const { page, ...otherParams } = searchParams;
  if (!page) {
    redirect("/all-cards?page=1");
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
    <main className="flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-white p-12 pt-28 dark:bg-dark1 xs:pt-24 sm:flex-row sm:items-start sm:pt-20">
      <SearchContainer />
      <div className="flex flex-col items-center justify-center">
        <div className="flex-grow-1 relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-lg border-2 border-dark2 bg-white p-6 pt-7 dark:bg-dark2 sm:grid-cols-3 md:grid-cols-4">
          {cards.length === 0 ? (
            <h1>No cards found</h1>
          ) : (
            cards?.map((card) => {
              return <CardImage card={card} key={card.id} />;
            })
          )}
        </div>
        <div className="flex items-center justify-center gap-2 py-2 ">
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
