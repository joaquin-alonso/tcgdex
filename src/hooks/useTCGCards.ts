import useSWRImmutable from 'swr/immutable';
import { TCGServiceFactory } from '@/services/tcg/TCGServiceFactory';
import { TCGName } from '@/services/tcg/TCGServiceFactory';
import { CardsSearchParams } from '@/services/tcg/TCGService';

const fetcher = <T>(tcg: TCGName, query?: CardsSearchParams) => {
  const service = TCGServiceFactory.createService(tcg);
  return service.searchCards<T>(query);
};

export function useTCGCards<T>(tcg: TCGName, query?: CardsSearchParams) {
  return useSWRImmutable(
    [tcg, query?.q, query?.page, query?.pageSize, query?.orderBy],
    () => fetcher<T>(tcg, query)
  );
}
