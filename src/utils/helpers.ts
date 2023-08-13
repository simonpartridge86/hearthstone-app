import { FormInput, SearchParams } from "./types";

export const paramsToQueryString = (params: FormInput | SearchParams) => {
  const queryString = Object.keys(params)
    .filter((key) => params[key] !== "")
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          params[key],
        ).toLowerCase()}`,
    )
    .join("&")
    .concat("&");

  return queryString;
};
