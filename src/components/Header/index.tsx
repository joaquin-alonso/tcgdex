import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        Ash's TCGDex{' '}
        <Image
          className={styles.logo}
          src="/pikachu.svg"
          alt="Next.js logo"
          width={40}
          height={40}
          priority
        />
      </Link>
    </header>
  );
}
