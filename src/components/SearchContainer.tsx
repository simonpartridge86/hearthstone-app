import { getCardMetaData } from "@/utils/fetchFunctions";
import { MetaData } from "@/utils/types";
import { SearchForm } from "./SearchForm";

export const SearchContainer = async () => {
  const metaData: MetaData = await getCardMetaData();

  const sets = metaData.sets.map((set) => set.name);
  const classes = metaData.classes.map((class_) => class_.name);
  const rarities = metaData.rarities.map((rarity) => rarity.name);
  const cardTypes = metaData.types.map((type) => type.name);
  const minionTypes = metaData.minionTypes.map((minionType) => minionType.name);
  const keywords = metaData.keywords.map((keyword) => keyword.name);

  const searchOptions = {
    sets,
    classes,
    rarities,
    cardTypes,
    minionTypes,
    keywords,
  };

  return (
    <div className="flex w-4/5 flex-col items-center rounded-xl border-2 border-dark2 bg-gray p-8 pb-2 dark:border-dark4 dark:bg-dark4 md:w-3/4 lg:w-1/2 xl:w-[30%]">
      <SearchForm searchOptions={searchOptions} />
    </div>
  );
};
