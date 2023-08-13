const Loading = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-5 bg-white p-12 pt-28 dark:bg-dark1 xs:pt-24 sm:pt-20">
      <h2>Loading favourites...</h2>
      <span className="loading-xl loading loading-spinner text-green"></span>
    </main>
  );
};

export default Loading;
