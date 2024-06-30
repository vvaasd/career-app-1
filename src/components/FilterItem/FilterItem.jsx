import styles from './FilterItem.module.css';
import arrowRightImg from '@/assets/img/arrow-right.svg';
const FilterItem = ({ type, imgSrc, children }) => {
  return (
    <li className={styles['wrapper']}>
      <button type='button' className={styles['btn']}>
        <div className={styles['img-and-text']}>
          <img src={imgSrc} alt='filter type img' className={styles['img']} />
          <p className={styles['text']}>{children}</p>
        </div>
        {type === 'dropdown' && (
          <img
            src={arrowRightImg}
            alt='Стрелка вправо'
            className={styles['arrow-img']}
          />
        )}
      </button>
    </li>
  );
};

export default FilterItem;
