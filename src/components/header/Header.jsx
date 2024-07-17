import { cn } from '../../utils';
import { Logo } from '../logo/Logo';
import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <a
            className={cn(styles.link, {
              [styles.active]: location.pathname === '/',
            })}
            href='/'
          >
            Поиск вакансий
          </a>
          <a
            className={cn(styles.link, {
              [styles.active]: location.pathname === '/favorites',
            })}
            href='/favorites'
          >
            Избранные вакансии
          </a>
        </nav>
      </div>
    </header>
  );
}
