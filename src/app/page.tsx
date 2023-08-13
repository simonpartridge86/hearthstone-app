import { CardBackImage } from "@/components/CardBackImage";
import { CardBack } from "@/utils/types";
import { getCardBacks } from "../utils/fetchFunctions";

const App = async () => {
  const { cardBacks }: { cardBacks: CardBack[] } = await getCardBacks();
  return (
    <main className="flex h-full min-h-[90vh] flex-col items-center gap-y-5 bg-white p-12 pt-28 dark:bg-dark1 xs:pt-24 sm:pt-20">
      <h2>Select a Card Back to enter:</h2>
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-lg border-2 border-dark2 bg-white p-6 pt-7 dark:bg-dark2 xs:grid-cols-3 sm:grid-cols-6">
        {cardBacks?.map((cardBack) => {
          return <CardBackImage cardBack={cardBack} key={cardBack.id} />;
        })}
      </div>
    </main>
  );
};

export default App;
