import { FallbackCardImage } from "@/components/FallbackCardImage";

const Loading = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-5 bg-white p-12 pt-28 dark:bg-dark1 xs:pt-24 sm:pt-20">
      <h2>Loading favourites...</h2>
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-lg border-2 border-dark2 bg-white p-6 pt-7 dark:bg-dark2 xs:grid-cols-4 md:grid-cols-6">
        <FallbackCardImage key={1} id={1} />
        <FallbackCardImage key={2} id={2} />
        <FallbackCardImage key={3} id={3} />
        <FallbackCardImage key={4} id={4} />
        <FallbackCardImage key={5} id={5} />
        <FallbackCardImage key={6} id={6} />
      </div>
    </main>
  );
};

export default Loading;
