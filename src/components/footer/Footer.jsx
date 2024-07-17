import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.desc}>
          Проект выполнен в рамках стажировки{' '}
          <a className={styles.link} target='_blank' href='https://preax.ru/'>
            PREAX
          </a>
        </p>
      </div>
    </footer>
  );
}
