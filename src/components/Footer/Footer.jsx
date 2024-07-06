import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes["footer__wrapper"]} container`}>
        <p>
          Проект выполнен в рамках стажировки{" "}
          <a target="_blank" href="https://preax.ru">PREAX</a>
        </p>
      </div>
    </footer>
  );
}
