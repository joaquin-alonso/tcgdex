import styles from './styles.module.css';

export interface SpinnerProps {
  center?: boolean;
  color?: string;
  size?: 's' | 'm' | 'l';
}

export function Spinner({
  center = false,
  color = 'var(--foreground)',
  size = 'm',
}: SpinnerProps) {
  return (
    <div
      className={`${styles.spinner} ${styles[`spinner${size.toUpperCase()}`]} ${
        center && styles.spinnerCenter
      }`}
      style={{
        color,
      }}
    >
      <span>Loading...</span>
    </div>
  );
}
