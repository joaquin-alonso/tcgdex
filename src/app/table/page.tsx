'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Page } from '@/components/Page';
import { usePokemonCards } from '@/hooks/usePokemonCards';
import { Spinner } from '@/components/Spinner';
import { Table } from '@/components/Table';
import { TableSearch } from '@/components/TableSearch';
import {
  PokemonCard,
  PokemonCardType,
  PokemonCardRarity,
  PokemonCardLegality,
} from '@/types/PokemonCard';
import styles from './styles.module.css';

export default function TablePage() {
  const [name, setName] = useState('');
  const [type, setType] = useState<PokemonCardType>();
  const [rarity, setRarity] = useState<PokemonCardRarity>();
  const [legality, setLegality] = useState<PokemonCardLegality>();
  const { data, error, isLoading } = usePokemonCards({
    pageSize: 10,
    q: [
      ...(name ? [`name:"${name}*"`] : ''),
      ...(type ? [`types:${type}`] : ''),
      ...(rarity ? [`rarity:${rarity}`] : ''),
      ...(legality ? [`legalities.${legality}:legal`] : ''),
    ].join(' '),
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const type = formData.get('type') as PokemonCardType;
    const rarity = formData.get('rarity') as PokemonCardRarity;
    const legality = formData.get('legality') as PokemonCardLegality;
    setName(name);
    setType(type);
    setRarity(rarity);
    setLegality(legality);
  };

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

  return (
    <Page title="Cards list">
      <TableSearch
        submitHandler={submitHandler}
        name={name}
        type={type}
        rarity={rarity}
        legality={legality}
      />
      <Table<PokemonCard>
        columns={[
          {
            key: 'id',
            label: 'ID',
          },
          {
            key: 'images',
            label: 'Image',
            renderer: (image) => (
              <Image
                className={styles.cardImage}
                src={image.small}
                alt="Next.js logo"
                width={40}
                height={40}
                priority
              />
            ),
          },
          {
            key: 'name',
            label: 'Name',
          },
          {
            key: 'types',
            label: 'Types',
            renderer: (types) => `${types.join(' ')}`,
          },
          {
            key: 'subtypes',
            label: 'Subtypes',
            renderer: (subtypes) => `${subtypes.join(' ')}`,
          },
          {
            key: 'rarity',
            label: 'Rarity',
          },
          {
            key: 'legalities',
            label: 'Legality',
            renderer: (legalities) =>
              (Object.keys(legalities) as Array<keyof typeof legalities>)
                .filter((legality) => legalities[legality] === 'Legal')
                .join(' '),
          },
          {
            key: 'set',
            label: 'Set Name',
            renderer: (set) => set.name,
          },
        ]}
        data={data.data}
      />
    </Page>
  );
}
