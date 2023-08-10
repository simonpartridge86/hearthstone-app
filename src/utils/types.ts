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
