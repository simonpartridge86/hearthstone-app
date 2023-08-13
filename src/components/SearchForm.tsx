"use client";

import { numberOptions } from "@/lib/usefulData";
import { paramsToQueryString } from "@/utils/helpers";
import { FormInput, SearchOptions } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import BasicButton from "./BasicButton";

type SearchFormProps = {
  searchOptions: SearchOptions;
};

//set=rise-of-shadows
//class=mage
//manaCost=10 max of 10
//attack=4 max of 10
//health=10 max of 10
//rarity=legendary
//type=minion
//minionType=dragon
//keyword=battlecry
//textFilter=kalecgos
//page=1&pageSize=20

export const SearchForm: React.FC<SearchFormProps> = ({ searchOptions }) => {
  const router = useRouter();
  const { sets, classes, rarities, cardTypes, minionTypes, keywords } =
    searchOptions;

  const initialValues = {
    textFilter: "",
    class: "-- Select from list --",
    manaCost: "-- Select from list --",
    attack: "-- Select from list --",
    health: "-- Select from list --",
    rarity: "-- Select from list --",
    type: "-- Select from list --",
    minionType: "-- Select from list --",
    keyword: "-- Select from list --",
    set: "-- Select from list --",
  };

  const { register, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: initialValues,
  });
  const onSubmit = handleSubmit((data) => {
    const queryString =
      Object.keys(data).length !== 0 ? paramsToQueryString(data) : "";

    router.replace(`/card-search?${queryString}&page=1`);
  });

  const resetForm = () => reset(initialValues);

  return (
    <div className="flex flex-col">
      <form className="flex flex-col">
        <label>Name</label>
        <input
          type="text"
          placeholder="Search text"
          {...register("textFilter")}
        />
        <label>Class</label>
        <select {...register("class")}>
          {classes.sort().map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <label>Mana Cost</label>
        <select {...register("manaCost")}>
          {numberOptions.map((num) => (
            <option key={`attack${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
        <label>Attack</label>
        <select {...register("attack")}>
          {numberOptions.map((num) => (
            <option key={`manaCost${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
        <label>Health</label>
        <select {...register("health")}>
          {numberOptions.map((num) => (
            <option key={`health${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
        <label>Rarity</label>
        <select {...register("rarity")}>
          {rarities.map((rarity) => (
            <option key={rarity} value={rarity}>
              {rarity}
            </option>
          ))}
        </select>
        <label>Card Type</label>
        <select {...register("type")}>
          {cardTypes.sort().map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label>Minion Type</label>
        <select {...register("minionType")}>
          {minionTypes.sort().map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label>Keyword</label>
        <select {...register("keyword")}>
          {keywords.sort().map((keyword, index) => (
            <option key={`keyword-${keyword}-${index}`} value={keyword}>
              {keyword}
            </option>
          ))}
        </select>
        <label>Sets</label>
        <select {...register("set")}>
          {sets.sort().map((set) => (
            <option key={`set-${set}`} value={set}>
              {set}
            </option>
          ))}
        </select>
      </form>
      <BasicButton onClick={onSubmit} text="Search" />
      <BasicButton onClick={resetForm} text="Clear Filters" />
    </div>
  );
};
