import { useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { CardsResponse } from '@/services/tcg/TCGService';
import { TCGServiceFactory } from '@/services/tcg/TCGServiceFactory';
import { PokemonCard } from '@/types/PokemonCard';
import { Spinner } from '../Spinner';
import styles from './styles.module.css';

export interface PokemonBarChartProps {
  chartCategories: string[];
  chartColors?: string[];
  filterName: string;
  id: string;
  title: string;
}

export function PokemonBarChart({
  chartCategories,
  chartColors,
  filterName,
  id,
  title,
}: PokemonBarChartProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    echarts.use([
      BarChart,
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
    ]);

    let barChart: echarts.EChartsType;
    const resizeHandler = () => {
      console.log('RESIZE');
      barChart?.resize();
    };

    const fetchDataAndRenderChart = async () => {
      const service = TCGServiceFactory.createService('pokemon');
      try {
        const responses = await Promise.all<CardsResponse<PokemonCard>>(
          chartCategories.map((category) => {
            return service.searchCards<PokemonCard>({
              page: 1,
              pageSize: 1,
              q: `${filterName}:${category}`,
            });
          })
        );

        if (!ignore) {
          setIsLoading(false);
          barChart = echarts.init(document.getElementById(id));
          barChart.setOption({
            xAxis: {
              type: 'value',
            },
            yAxis: {
              type: 'category',
              data: chartCategories,
            },
            tooltip: {
              trigger: 'item',
              axisPointer: { type: 'cross' },
            },
            series: [
              {
                data: responses.map((r, index) => {
                  if (chartColors?.[index]) {
                    return {
                      value: r.totalCount,
                      itemStyle: {
                        color: chartColors?.[index],
                      },
                    };
                  }
                  return r.totalCount;
                }),
                type: 'bar',
              },
            ],
            grid: {
              top: 16,
              bottom: 32,
            },
          });
          window.addEventListener('resize', resizeHandler);
        }
      } catch (e) {
        setError(true);
      }
    };
    fetchDataAndRenderChart();

    return () => {
      ignore = true;
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      {isLoading && <Spinner size="l" />}
      {error && <p>Ups! Something went wrong ¯\_(ツ)_/¯</p>}
      <div
        className={styles.barChart}
        id={id}
        style={{ height: `${chartCategories.length * 48}px` }}
      />
    </div>
  );
}
