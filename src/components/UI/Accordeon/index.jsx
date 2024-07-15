import { AccordeonItem } from './AccordeonItem';

import styles from './Accordeon.module.css';

export function Accordeon({ filters }) {
  console.log(filters);
  return (
    <ul className={styles.container}>
      {filters.map((el) => {
        return (
          <li key={el.title}>
            <AccordeonItem {...el} />
          </li>
        );
      })}
    </ul>
  );
}
