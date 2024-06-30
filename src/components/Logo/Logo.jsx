import styles from './Logo.module.css';
import logo from '@/assets/img/logo.svg';

const Logo = () => {
  return (
    <a href='#' className={styles['link']}>
      <img src={logo} alt='CareerApp' className={styles['logo']} />
    </a>
  );
};

export default Logo;
