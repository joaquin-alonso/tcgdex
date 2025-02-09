import { useTCGCards } from './useTCGCards';
import { PokemonCard } from '@/types/PokemonCard';
import { CardsSearchParams } from '@/services/tcg/TCGService';

export function usePokemonCards(query?: CardsSearchParams) {
  return useTCGCards<PokemonCard>('pokemon', query);
}
