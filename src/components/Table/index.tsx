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
    <div className={styles.wrapper}>
      {data.length ? (
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              {columns.map((column) => (
                <th
                  key={`th-${String(column.key)}`}
                  className={styles.headCell}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className={styles.bodyRow}>
                {columns.map((column) => (
                  <td
                    key={`td-${String(column.key)}`}
                    className={styles.bodyCell}
                  >
                    {column.renderer
                      ? column.renderer(row[column.key])
                      : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No cards were found for your search.</p>
      )}
    </div>
  );
}
