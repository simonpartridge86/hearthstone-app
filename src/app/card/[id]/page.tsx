import { getCard } from "@/utils/fetchFunctions";

type PageProps = {
  params: { id: string };
};

const Page: React.FC<PageProps> = async ({ params }) => {
  const card = await getCard(params.id);
  return <pre>{JSON.stringify(card)}</pre>;
};

export default Page;
