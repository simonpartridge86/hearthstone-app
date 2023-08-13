"use client";

import { StateCreator, create } from "zustand";
import { CardBackState, FavouritesState } from "./types";

const useFavouritesSlice: StateCreator<FavouritesState> = (set) => ({
  favourites: [],

  addFavourite: (favourite) =>
    set((state) => ({
      favourites: [favourite, ...state.favourites],
    })),

  removeFavourite: (id: number) =>
    set((state) => ({
      favourites: state.favourites.filter((favourite) => favourite.id !== id),
    })),
});

const useCardBackSlice: StateCreator<CardBackState> = (set) => ({
  cardBack: "",
  setCardBack: (cardBack: string) => set({ cardBack }),
});

export const useStore = create<FavouritesState & CardBackState>()((...a) => ({
  ...useFavouritesSlice(...a),
  ...useCardBackSlice(...a),
}));

export default useStore;
