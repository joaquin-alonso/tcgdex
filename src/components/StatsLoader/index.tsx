import { useEffect, useState } from 'react';
import { TCGServiceFactory } from '@/services/tcg/TCGServiceFactory';
import { Stats, StatData } from '../Stats';

export interface StatsLoaderProps {
  statCategories: string[];
  filterName?: string;
  filterTemplate?: string;
  title: string;
}

export function StatsLoader({
  statCategories,
  filterName,
  filterTemplate = '{filterName}:"{category}"',
  title,
}: StatsLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<StatData[]>([]);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const fetchDataAndRenderChart = async () => {
      const service = TCGServiceFactory.createService('pokemon');
      try {
        const responses = await Promise.all<
          ReturnType<typeof service.searchCards>
        >(
          statCategories.map((category) => {
            return service.searchCards({
              page: 1,
              pageSize: 1,
              q: filterName
                ? filterTemplate
                    .replace('{filterName}', filterName)
                    .replace('{category}', category)
                : '',
            });
          })
        );

        setData(
          responses.map((r, index) => ({
            label: statCategories[index],
            count: r.totalCount,
          }))
        );

        if (!ignore) {
          setIsLoading(false);
        }
      } catch (e) {
        setError(true);
      }
    };
    fetchDataAndRenderChart();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Stats data={data} error={error} isLoading={isLoading} title={title} />
  );
}
