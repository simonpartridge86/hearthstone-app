"use client";

import { create } from "zustand";

type ZustandState = {
  favourites: { id: number; image: string }[];
  addFavourite: (favourite: { id: number; image: string }) => void;
  removeFavourite: (id: number) => void;
};

const useStore = create<ZustandState>()((set) => ({
  favourites: [],

  addFavourite: (favourite) =>
    set((state) => ({
      favourites: [favourite, ...state.favourites],
    })),

  removeFavourite: (id: number) =>
    set((state) => ({
      favourites: state.favourites.filter((favourite) => favourite.id !== id),
    })),
}));

export default useStore;
