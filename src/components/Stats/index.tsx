import { Spinner } from '../Spinner';
import styles from './styles.module.css';

export type StatData = {
  count: number;
  label: string;
};

export interface StatsProps {
  data: StatData[];
  error?: boolean;
  isLoading?: boolean;
  title: string;
}

export function Stats({ data, error, isLoading, title }: StatsProps) {
  return (
    <div className={styles.stats}>
      <h3 className={styles.title}>{title}</h3>
      {isLoading && <Spinner center size="l" />}
      {error && <p>Ups! Something went wrong ¯\_(ツ)_/¯</p>}
      {!isLoading && !error && (
        <ul className={styles.list}>
          {data.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <b>{stat.label}:</b> {stat.count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
