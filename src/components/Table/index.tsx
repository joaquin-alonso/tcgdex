import styles from './styles.module.css';

export type Column<T> = {
  [K in keyof T]: {
    key: K;
    label: string;
    renderer?: (value: T[K], row?: T) => React.ReactNode;
  };
}[keyof T];

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export function Table<T extends { id: string }>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={`th-${String(column.key)}`}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={`td-${String(column.key)}`}>
                {column.renderer
                  ? column.renderer(row[column.key])
                  : String(row[column.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
