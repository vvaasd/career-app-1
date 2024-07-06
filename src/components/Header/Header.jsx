import { useState } from "react";
import logo from "../../images/logo.svg";
import classes from "./Header.module.css";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Поиск вакансий");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className={classes["header"]}>
      <div className={`${classes["header__wrapper"]} container`}>
        <div className={classes["logo-wrapper"]}>
          <img src={logo} alt="logo" className={classes["logo"]} />
        </div>
        <nav className={classes["menu"]}>
          <ul className={classes["menu-list"]}>
            <li
              className={`${classes["menu-item"]} ${
                activeItem === "Поиск вакансий" ? classes["active"] : ""
              }`}
              onClick={() => handleItemClick("Поиск вакансий")}
            >
              Поиск вакансий
            </li>
            <li
              className={`${classes["menu-item"]} ${
                activeItem === "Избранные вакансии" ? classes["active"] : ""
              }`}
              onClick={() => handleItemClick("Избранные вакансии")}
            >
              Избранные вакансии
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
