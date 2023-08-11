type Params = {
  [key: string]: string;
};

export const paramsToQueryString = (params: Params) => {
  const queryString = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&")
    .concat("&");

  return queryString;
};
