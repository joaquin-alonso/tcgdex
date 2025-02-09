'use client';

import { Page } from '@/components/Page';
import { usePokemonCards } from '@/hooks/usePokemonCards';
import { Spinner } from '@/components/Spinner';

export default function DashboardPage() {
  const { data, error, isLoading } = usePokemonCards({
    pageSize: 10,
  });

  if (isLoading) {
    return (
      <Page title="Cards list">
        <Spinner size="l" />
      </Page>
    );
  }

  if (error || !data) {
    return (
      <Page title="Cards list">
        <p>Ups! Something went wrong ¯\_(ツ)_/¯</p>
      </Page>
    );
  }

  return <Page title="Dashboard"></Page>;
}
