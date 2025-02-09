import styles from './styles.module.css';

export interface SpinnerProps {
  color?: string;
  size?: 's' | 'm' | 'l';
}

export function Spinner({
  color = 'var(--foreground)',
  size = 'm',
}: SpinnerProps) {
  return (
    <div
      className={`${styles.spinner} ${styles[`spinner${size.toUpperCase()}`]}`}
      style={{
        color,
      }}
    >
      <span>Loading...</span>
    </div>
  );
}
