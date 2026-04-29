import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Logo() {
  return (
    <h1 className={styles.logo}>
      <RouterLink className={styles.logoLink} href='/'>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </h1>
  );
}
