"use client";

import { numberOptions } from "@/lib/usefulData";
import { paramsToQueryString } from "@/utils/helpers";
import { FormInput, SearchOptions } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import BasicButton from "./buttons/BasicButton";

type SearchFormProps = {
  searchOptions: SearchOptions;
};

export const SearchForm: React.FC<SearchFormProps> = ({ searchOptions }) => {
  const router = useRouter();
  const { sets, classes, rarities, cardTypes, minionTypes, keywords } =
    searchOptions;

  const initialValues = {
    textFilter: "",
    class: "",
    manaCost: "",
    attack: "",
    health: "",
    rarity: "",
    type: "",
    minionType: "",
    keyword: "",
    set: "",
  };

  const { register, handleSubmit, reset } = useForm<FormInput>({
    defaultValues: initialValues,
  });
  const onSubmit = handleSubmit((data) => {
    const queryString =
      Object.keys(data).length !== 0 ? paramsToQueryString(data) : "";

    router.replace(`/card-search?${queryString}page=1`);
  });

  const resetForm = () => {
    reset(initialValues);
    router.replace(`/card-search`);
  };

  return (
    <>
      <form className="flex w-full flex-col gap-2 text-xl">
        <label>Name</label>
        <input
          className="input input-bordered input-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          type="text"
          placeholder="Search text"
          {...register("textFilter")}
        />
        <label>Class</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("class")}
        >
          {classes.sort().map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <label>Mana Cost</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("manaCost")}
        >
          {numberOptions.map((num) => (
            <option key={`attack${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
        <label>Attack</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("attack")}
        >
          {numberOptions.map((num) => (
            <option key={`manaCost${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
        <label>Health</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("health")}
        >
          {numberOptions.map((num) => (
            <option key={`health${num}`} value={num}>
              {num}
            </option>
          ))}
        </select>
        <label>Rarity</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("rarity")}
        >
          {rarities.map((rarity) => (
            <option key={rarity} value={rarity}>
              {rarity}
            </option>
          ))}
        </select>
        <label>Card Type</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("type")}
        >
          {cardTypes.sort().map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label>Minion Type</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("minionType")}
        >
          {minionTypes.sort().map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <label>Keyword</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("keyword")}
        >
          {keywords.sort().map((keyword, index) => (
            <option key={`keyword-${keyword}-${index}`} value={keyword}>
              {keyword}
            </option>
          ))}
        </select>
        <label>Sets</label>
        <select
          className="select select-bordered select-lg w-full max-w-lg bg-white font-normal text-dark2 dark:bg-dark2 dark:text-white"
          {...register("set")}
        >
          {sets.sort().map((set) => (
            <option key={`set-${set}`} value={set}>
              {set}
            </option>
          ))}
        </select>
      </form>
      <div className="flex w-full items-center justify-center gap-6 px-4 py-6">
        <BasicButton onClick={resetForm} text="Clear" />
        <BasicButton onClick={onSubmit} text="Search" />
      </div>
    </>
  );
};
