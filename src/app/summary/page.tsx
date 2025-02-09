'use client';

import { Page } from '@/components/Page';
import { StatsLoader } from '@/components/StatsLoader';
import {
  CARD_SUPERTYPES,
  CARD_LEGALITIES,
  CARD_RARITIES,
  CARD_SUBTYPES,
  CARD_TYPES,
} from '@/constants/pokemon';
import styles from './styles.module.css';

export default function SummaryPage() {
  return (
    <Page title="Summary">
      <div className={styles.stats}>
        <StatsLoader
          statCategories={['Count']}
          filterName=""
          title="Total cards"
        />
        <StatsLoader
          statCategories={CARD_SUPERTYPES as unknown as string[]}
          filterName="supertype"
          title="Cards by Supertype"
        />
        <StatsLoader
          statCategories={CARD_LEGALITIES as unknown as string[]}
          filterName="legalities"
          filterTemplate="{filterName}.{category}:Legal"
          title="Cards by Legality"
        />
        <StatsLoader
          statCategories={CARD_RARITIES as unknown as string[]}
          filterName="rarity"
          title="Cards by Rarity"
        />
        <StatsLoader
          statCategories={CARD_TYPES as unknown as string[]}
          filterName="types"
          title="Cards by Type"
        />
        <StatsLoader
          statCategories={CARD_SUBTYPES as unknown as string[]}
          filterName="subtypes"
          title="Cards by Subtype"
        />
      </div>
    </Page>
  );
}
