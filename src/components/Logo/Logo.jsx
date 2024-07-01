import { ICON_NAMES } from '@/constants';
import styles from './Logo.module.css';
import { Icon } from '@/components';

const Logo = () => {
  return (
    <a href='#' className={styles['link']}>
      <Icon name={ICON_NAMES.logo} className={styles['logo']} />
    </a>
  );
};

export default Logo;
