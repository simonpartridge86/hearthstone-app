import { CardBackImage } from "@/components/card-images/CardBackImage";
import { CardBack } from "@/utils/types";
import { getCardBacks } from "../utils/fetchFunctions";

const App = async () => {
  const { cardBacks }: { cardBacks: CardBack[] } = await getCardBacks();
  return (
    <main className="flex h-full min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      <h2>Select a Card Back to enter:</h2>
      <div className="relative grid grid-cols-2 gap-10 rounded-xl border-2 border-dark2 bg-white p-10 dark:bg-dark2 sm:grid-cols-3 xl:grid-cols-6">
        {cardBacks?.map((cardBack) => {
          return <CardBackImage cardBack={cardBack} key={cardBack.id} />;
        })}
      </div>
    </main>
  );
};

export default App;
