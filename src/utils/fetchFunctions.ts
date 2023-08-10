export const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
export const BASE_URL = process.env.API_URL;

//fetches a random selection of 10 card back designs (233 total "cardCount")

export const getCardBacks = async () => {
  const randomPageNumber = Math.ceil(Math.random() * 23);

  try {
    const res = await fetch(
      `${BASE_URL}cardbacks?locale=en_US&page=${randomPageNumber}&pageSize=10&access_token=${ACCESS_TOKEN}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

//fetches all cards to a specified size limit (4876 total "cardCount")

export const getCards = async (limit: number) => {
  try {
    const res = await fetch(
      `${BASE_URL}cards?locale=en_US&pageSize=${limit}&access_token=${ACCESS_TOKEN}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

// fetches a single card by id

export const getCard = async (id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}cards/${id}?locale=en_US&access_token=${ACCESS_TOKEN}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};