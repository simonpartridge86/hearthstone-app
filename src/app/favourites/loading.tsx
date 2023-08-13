const Loading = () => {
  return (
    <main className="flex min-h-[90vh] flex-col items-center gap-y-16 bg-white py-36 text-3xl dark:bg-dark1">
      <h2>Loading favourites...</h2>
      <span className="loading-xl loading loading-spinner text-green"></span>
    </main>
  );
};

export default Loading;
