import {
  CARD_LEGALITIES,
  CARD_RARITIES,
  CARD_TYPES,
} from '@/constants/pokemon';
import {
  PokemonCardType,
  PokemonCardRarity,
  PokemonCardLegality,
} from '@/types/PokemonCard';
import styles from './styles.module.css';

export interface TableFiltersProps {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  name?: string;
  type?: PokemonCardType;
  rarity?: PokemonCardRarity;
  legality?: PokemonCardLegality;
}

export function TableSearch({
  submitHandler,
  name,
  type,
  rarity,
  legality,
}: TableFiltersProps) {
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        defaultValue={name}
        name="name"
        placeholder="Filter by name"
        type="text"
      />
      <select name="type" defaultValue={type}>
        <option value="">Select a Type</option>
        {CARD_TYPES.map((type) => (
          <option key={`legality-${type}`} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select name="rarity" defaultValue={rarity}>
        <option value="">Select a Rarity</option>
        {CARD_RARITIES.map((rarity) => (
          <option key={`rarity-${rarity}`} value={rarity}>
            {rarity}
          </option>
        ))}
      </select>
      <select name="legality" defaultValue={legality}>
        <option value="">Legal in</option>
        {CARD_LEGALITIES.map((legality) => (
          <option key={`legality-${legality}`} value={legality}>
            {legality}
          </option>
        ))}
      </select>
      <button type="submit">Go</button>
    </form>
  );
}
