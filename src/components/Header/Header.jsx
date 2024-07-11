import { useState } from 'react';
import Icon from '../Icon/Icon';
import classes from './Header.module.css';

export default function Header() {
  const [activeItem, setActiveItem] = useState('Поиск вакансий');

  return (
    <header className={classes['header']}>
      <div className={`${classes['header__wrapper']} container`}>
        <div className={classes['logo-wrapper']}>
          <Icon name="logo" className={classes['logo']} />
        </div>
        <nav className={classes['menu']}>
          <ul className={classes['menu-list']}>
            <li
              className={`${classes['menu-item']} ${
                activeItem === 'Поиск вакансий' ? classes['active'] : ''
              }`}
              onClick={() => setActiveItem('Поиск вакансий')}
            >
              Поиск вакансий
            </li>
            <li
              className={`${classes['menu-item']} ${
                activeItem === 'Избранные вакансии' ? classes['active'] : ''
              }`}
              onClick={() => setActiveItem('Избранные вакансии')}
            >
              Избранные вакансии
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
