'use client';

import { Page } from '@/components/Page';
import { PokemonBarChart } from '@/components/BarChart';
import { CARD_SUPERTYPES, CARD_TYPES } from '@/constants/pokemon';
import styles from './styles.module.css';

export default function DashboardPage() {
  return (
    <Page title="Dashboard">
      <div className={styles.charts}>
        <PokemonBarChart
          chartCategories={CARD_TYPES as unknown as string[]}
          chartColors={[
            '#D2D0CF',
            '#2E7077',
            '#948F31',
            '#D6457E',
            '#B06232',
            '#D7223B',
            '#19A648',
            '#FCD020',
            '#9B9E8C',
            '#957DAB',
            '#04A7D9',
          ]}
          filterName="types"
          id="byType"
          title="Cards by Type"
        />
        <PokemonBarChart
          chartCategories={CARD_SUPERTYPES as unknown as string[]}
          filterName="supertype"
          id="bySupertype"
          title="Cards by Supertype"
        />
      </div>
    </Page>
  );
}
