import Image from "next/image";
import Link from "next/link";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const getData = async () => {
  const res = await fetch(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&page=1&pageSize=10&access_token=${ACCESS_TOKEN}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.cards;
};

const CardLibrary = async () => {
  const cards = await getData();

  //   console.log(cards.map((card) => card.id));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Card Library
      <Link href="/">Home</Link>
      {cards?.map((card) => {
        return (
          <Image
            key={card.id}
            src={card.image}
            height={250}
            width={150}
            alt="hearthstone card"
          />
        );
      })}
    </main>
  );
};

export default CardLibrary;
