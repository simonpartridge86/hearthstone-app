import { FallbackCardImage } from "@/components/card-images/FallbackCardImage";

const Loading = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      <h2>Card loading...</h2>
      <div className="flex border-dark2 bg-white p-10 dark:bg-dark2 md:grid-cols-4 xl:grid-cols-6">
        <FallbackCardImage key={1} id={1} />
      </div>
    </main>
  );
};

export default Loading;
