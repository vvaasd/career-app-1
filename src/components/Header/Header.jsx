import { LogoSVG } from '@components/UI/IconsSVG/LogoSVG';
import styles from './Header.module.css';
import clsx from '@utils/clsx';
import { useResize } from '@hooks/useResize';
import { SIZE_CONTAINER } from '@constants';
import { BurgerSVG } from '@components/UI/IconsSVG/BurgerSVG';
import { useEffect, useState } from 'react';
import { CloseSVG } from '@components/UI/IconsSVG/CloseSVG';
import { Footer } from '@components/Footer/Footer';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const screenType = useResize();

  const contentNode = document.getElementById("content");

  useEffect(() => {
    if (!isMenuOpen) return
    document.body.style.overflow = "hidden";
    contentNode?.setAttribute("inert", "true");
    return () => {
      contentNode?.removeAttribute("inert");
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (screenType === SIZE_CONTAINER.desktop) {
      setIsMenuOpen(false)
    }
  }, [screenType]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <LogoSVG className={styles.logo} />
        <menu className={`

          ${screenType !== SIZE_CONTAINER.desktop ? styles.mobile : styles.desktop}
          ${isMenuOpen ? styles.isOpen : ''}
        `}>
          <div className={`${styles.menu} `}>
            <button type='button' className={clsx(styles.button, styles.active)}>
              Поиск вакансий
            </button>
            <button type='button' className={styles.button}>
              Избранные вакансии
            </button>
          </div>
          {screenType !== SIZE_CONTAINER.desktop && <Footer className={styles.footer} />}
        </menu>
        {screenType !== SIZE_CONTAINER.desktop &&
          <button className={styles.button}>
            {
              !isMenuOpen && <BurgerSVG className={styles.icon} onClick={() => setIsMenuOpen(true)} />
            }
            {
              isMenuOpen && <CloseSVG className={styles.icon} onClick={() => setIsMenuOpen(false)} />
            }
          </button>
        }
      </header>
    </div>
  );
};
