import Link from 'next/link';
import { FcDoughnutChart, FcInfo, FcViewDetails } from 'react-icons/fc';
import styles from './styles.module.css';

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/dashboard" className={styles.link}>
            <FcDoughnutChart /> <span>Dashboard</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/list" className={styles.link}>
            <FcViewDetails /> <span>Cards list</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/summary" className={styles.link}>
            <FcInfo /> <span>Summary</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
