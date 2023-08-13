export type CardData = {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: any[];
  spellSchoolId?: number;
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage: string;
  parentId: number;
  keywordIds?: number[];
  duels?: {
    relevant: boolean;
    constructed: boolean;
  };
  health?: number;
  attack?: number;
  minionTypeId?: number;
  copyOfCardId?: number;
};

export type CardBack = {
  id: number;
  sortCategory: number;
  text: string;
  name: string;
  image: string;
  slug: string;
};

export type MetaData = {
  sets: Set[];
  setGroups: SetGroup[];
  gameModes: CardBackCategory[];
  arenaIds: number[];
  types: CardBackCategory[];
  rarities: Rarity[];
  classes: Class[];
  minionTypes: CardBackCategory[];
  spellSchools: CardBackCategory[];
  mercenaryRoles: CardBackCategory[];
  mercenaryFactions: CardBackCategory[];
  keywords: Keyword[];
  filterableFields: string[];
  numericFields: string[];
  cardBackCategories: CardBackCategory[];
};

export type CardBackCategory = {
  slug: string;
  id: number;
  name: string;
  gameModes?: number[];
};

export type Class = {
  slug: string;
  id: number;
  name: string;
  cardId?: number;
  heroPowerCardId?: number;
  alternateHeroCardIds?: number[];
};

export type Keyword = {
  id: number;
  slug: string;
  name: string;
  refText: string;
  text: string;
  gameModes: number[];
};

export type Rarity = {
  slug: string;
  id: number;
  craftingCost: Array<number | null>;
  dustValue: Array<number | null>;
  name: string;
};

export type SetGroup = {
  slug: string;
  year?: number;
  svg?: null | string;
  cardSets: string[];
  name: string;
  standard?: boolean;
  icon?: string;
  yearRange?: string;
};

export type Set = {
  id: number;
  name: string;
  slug: string;
  type: SetType;
  collectibleCount: number;
  collectibleRevealedCount: number;
  nonCollectibleCount: number;
  nonCollectibleRevealedCount: number;
  aliasSetIds?: number[];
};

export enum SetType {
  Adventure = "adventure",
  Base = "base",
  Empty = "",
  Expansion = "expansion",
}

export type SearchOptions = {
  sets: string[];
  classes: string[];
  rarities: string[];
  cardTypes: string[];
  minionTypes: string[];
  keywords: string[];
};

export type SearchParams = {
  [key: string]: string;
};

export interface FormInput {
  textFilter: string;
  class: string;
  manaCost: string;
  attack: string;
  health: string;
  collectible: string;
  rarity: string;
  type: string;
  minionType: string;
  keyword: string;
  set: string;
  [key: string]: string;
}

export type CardBackState = {
  cardBack: string;
  setCardBack: (cardBack: string) => void;
};

export type FavouritesState = {
  favourites: CardData[];
  addFavourite: (favourite: CardData) => void;
  removeFavourite: (id: number) => void;
};
