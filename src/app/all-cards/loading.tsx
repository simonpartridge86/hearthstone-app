import { FallbackCardImage } from "@/components/card-images/FallbackCardImage";

const Loading = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      <h2>Cards loading...</h2>
      <div className="relative grid grid-cols-2 gap-10 rounded-xl border-2 border-dark2 bg-white p-10 dark:bg-dark2 md:grid-cols-4 xl:grid-cols-6">
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
        <FallbackCardImage key={13} id={13} />
        <FallbackCardImage key={14} id={14} />
        <FallbackCardImage key={15} id={15} />
        <FallbackCardImage key={16} id={16} />
        <FallbackCardImage key={17} id={17} />
        <FallbackCardImage key={18} id={18} />
      </div>
    </main>
  );
};

export default Loading;
