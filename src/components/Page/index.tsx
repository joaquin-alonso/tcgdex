import styles from './styles.module.css';

export interface PageProps {
  title?: string;
}

export function Page({ children, title }: React.PropsWithChildren<PageProps>) {
  return (
    <div className={styles.page}>
      {!!title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </div>
  );
}
