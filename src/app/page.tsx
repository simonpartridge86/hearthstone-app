import { CardBackImage } from "@/components/CardBackImage";
import { CardContainer } from "@/components/CardContainer";
import { CardBack } from "@/utils/types";
import { getCardBacks } from "../utils/fetchFunctions";

const App = async () => {
  const { cardBacks }: { cardBacks: CardBack[] } = await getCardBacks();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Select a Card Back to Enter:</h2>
      <CardContainer>
        {cardBacks?.map((cardBack) => {
          return <CardBackImage cardBack={cardBack} key={cardBack.id} />;
        })}
      </CardContainer>
    </main>
  );
};

export default App;
