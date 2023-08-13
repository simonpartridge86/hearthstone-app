import { FallbackCardImage } from "@/components/FallbackCardImage";

const Loading = () => {
  return (
    <main className="flex h-full min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      <h2>Select a Card Back to enter:</h2>
      <div className="relative grid grid-cols-2 gap-10 rounded-xl border-2 border-dark2 bg-white p-10 dark:bg-dark2 sm:grid-cols-3 xl:grid-cols-6">
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
