import {
  CARD_LEGALITIES,
  CARD_RARITIES,
  CARD_SUBTYPES,
  CARD_TYPES,
  CARD_SUPERTYPES,
} from '@/constants/pokemon';

export type PokemonCardLegality = (typeof CARD_LEGALITIES)[number];

export type PokemonCardLegalityStatus = 'Legal' | 'Banned';

export type PokemonCardType = (typeof CARD_TYPES)[number];

export type PokemonCardSubtype = (typeof CARD_SUBTYPES)[number];

export type PokemonCardSupertype = (typeof CARD_SUPERTYPES)[number];

export type PokemonCardRarity = (typeof CARD_RARITIES)[number];

export interface PokemonSet {
  id: string;
  images: {
    logo: string;
    symblol: string;
  };
  legalities: Partial<Record<PokemonCardLegality, PokemonCardLegalityStatus>>;
  name: string;
  series: string;
  total: number;
}

export interface PokemonCard {
  artist: string;
  evolvesFrom: string;
  flavorText: string;
  hp: string;
  id: string;
  images: {
    large: string;
    small: string;
  };
  legalities: Partial<Record<PokemonCardLegality, PokemonCardLegalityStatus>>;
  name: string;
  number: string;
  rarity: PokemonCardRarity[];
  set: PokemonSet;
  subtypes: PokemonCardSubtype[];
  supertype: PokemonCardSupertype;
  types: PokemonCardType[];
}
