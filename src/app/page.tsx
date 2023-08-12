import { CardBackImage } from "@/components/CardBackImage";
import { CardBack } from "@/utils/types";
import { getCardBacks } from "../utils/fetchFunctions";

const App = async () => {
  const { cardBacks }: { cardBacks: CardBack[] } = await getCardBacks();
  return (
    <main className="pt-24 flex min-h-screen flex-col p-12 pt-6 items-center gap-y-5">
      <h2>Select a Card Back to enter:</h2>
      <div className="relative grid grid-cols-6 gap-x-6 gap-y-6 bg-dark2 p-6 pt-7 rounded-lg">
        {cardBacks?.map((cardBack) => {
          return <CardBackImage cardBack={cardBack} key={cardBack.id} />;
        })}
      </div>
    </main>
  );
};

export default App;
