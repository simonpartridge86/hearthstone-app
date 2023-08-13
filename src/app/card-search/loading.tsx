import { FallbackCardImage } from "@/components/FallbackCardImage";

const Loading = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center gap-10 bg-white pb-24 pt-36 dark:bg-dark1 xl:flex-row xl:items-start">
      <div className="flex h-[90vh] w-4/5 flex-col items-center rounded-xl border-2 border-dark2 bg-gray p-8 pb-2 dark:border-dark4 dark:bg-dark4 md:w-3/4 lg:w-1/2 xl:w-[30%]" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex-grow-1 relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-lg border-2 border-dark2 bg-white p-6 pt-7 dark:bg-dark2 sm:grid-cols-3 md:grid-cols-4">
          <FallbackCardImage key={1} id={1} />
          <FallbackCardImage key={2} id={2} />
          <FallbackCardImage key={3} id={3} />
          <FallbackCardImage key={4} id={4} />
          <FallbackCardImage key={5} id={5} />
          <FallbackCardImage key={6} id={6} />
          <FallbackCardImage key={7} id={7} />
          <FallbackCardImage key={8} id={8} />
          <FallbackCardImage key={9} id={9} />
          <FallbackCardImage key={10} id={10} />
          <FallbackCardImage key={11} id={11} />
          <FallbackCardImage key={12} id={12} />
        </div>
      </div>
    </main>
  );
};

export default Loading;
