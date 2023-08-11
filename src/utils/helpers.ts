import { FormInput, SearchParams } from "./types";

export const paramsToQueryString = (params: FormInput | SearchParams) => {
  const queryString = Object.keys(params)
    .filter(
      (key) => params[key] !== "" && params[key] !== "-- Select from list --"
    )
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&")
    .toLowerCase()
    .concat("&");

  return queryString;
};
