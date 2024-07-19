import { cn } from '../../../utils';
import styles from './styles.module.css';

const POSITIONS = {
  little: 'little',
  start: 'start',
  center: 'center',
  end: 'end',
};

const DotsItem = () => (
  <li>
    <button className={cn(styles.btn, styles.dots)}>...</button>
  </li>
);

export function PaginationBlock({
  onSelect,
  maxPages,
  currentPage,
  maxItems = 5,
}) {
  const maxItemsBetweenDots = maxItems - 2;
  let currentPosition = POSITIONS.start;
  if (maxPages <= maxItems) {
    currentPosition = POSITIONS.little;
  } else if (maxPages - currentPage < maxItemsBetweenDots) {
    currentPosition = POSITIONS.end;
  } else if (currentPage > maxItemsBetweenDots) {
    currentPosition = POSITIONS.center;
  }

  const renderItems = (from, to) => {
    const buttonsCount = to - from + 1;

    return Array.from({ length: buttonsCount }, (_, i) => from + i).map(
      (pageNumber) => (
        <li key={pageNumber}>
          <button
            onClick={() => {
              onSelect(pageNumber);
            }}
            className={cn(styles.btn, {
              [styles.selected]: currentPage === pageNumber,
            })}
          >
            {pageNumber}
          </button>
        </li>
      )
    );
  };

  if (maxPages < 2) {
    return <></>;
  }

  return (
    <nav className={styles.block}>
      <ul className={styles.list}>
        {currentPosition === POSITIONS.little && renderItems(1, maxPages)}

        {/* Выполняется когда нужны точки слева и кнопка первой страницы */}
        {(currentPosition === POSITIONS.center ||
          currentPosition === POSITIONS.end) && (
          <>
            <li>
              <button
                onClick={() => {
                  onSelect(1);
                }}
                className={styles.btn}
              >
                1
              </button>
            </li>
            <DotsItem />
          </>
        )}
        {/* Конец */}

        {currentPosition === POSITIONS.start &&
          renderItems(1, maxItemsBetweenDots + 1)}

        {currentPosition === POSITIONS.center &&
          renderItems(currentPage - 1, currentPage + maxItemsBetweenDots - 2)}

        {currentPosition === POSITIONS.end &&
          renderItems(maxPages - maxItemsBetweenDots, maxPages)}

        {/* Выполняется когда нужны точки справа и кнопка последней страницы */}
        {(currentPosition === POSITIONS.center ||
          currentPosition === POSITIONS.start) && (
          <>
            <DotsItem />
            <li>
              <button
                onClick={() => {
                  onSelect(maxPages);
                }}
                className={styles.btn}
              >
                {maxPages}
              </button>
            </li>
          </>
        )}
        {/* Конец */}
      </ul>
    </nav>
  );
}
