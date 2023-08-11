import { SearchOptions } from "@/utils/types";
import { SearchButton } from "./SearchButton";

type SearchFormProps = {
  searchOptions: SearchOptions;
};

//set=rise-of-shadows
//class=mage
//manaCost=10
//attack=4
//health=10
//collectible=1
//rarity=legendary
//type=minion
//minionType=dragon
//keyword=battlecry
//textFilter=kalecgos
//page=1&pageSize=20

export const SearchForm: React.FC<SearchFormProps> = ({ searchOptions }) => {
  const searchTest = {
    minionType: "dragon",
    collectible: "1",
    keyword: "battlecry",
    health: "10",
  };

  // set: "rise-of-shadows",
  //   class: "mage",
  //   manaCost: "10",
  //   attack: "4",
  //   health: "10",
  //   collectible: "1",
  //   rarity: "legendary",
  //   type: "minion",
  //   minionType: "dragon",
  //   keyword: "battlecry",
  //   textFilter: "kalecgos",

  return (
    <div>
      SearchForm
      <SearchButton searchObj={searchTest} />
    </div>
  );
};
