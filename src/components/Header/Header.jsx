import { clsx } from '@/utils';
import { Logo } from '@/components';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}>
        <Logo />
        <nav className={styles['nav-tabs']}>
          <button
            type='button'
            className={clsx(styles['tab'], styles['tab--active'])}
          >
            Поиск вакансий
          </button>
          <button type='button' className={styles['tab']}>
            Избранные вакансии
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
