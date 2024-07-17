import { useRef, useState } from 'react';
import { Icon } from '../../icon/Icon';
import styles from './styles.module.css';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';
import FilterDropdonwList from '../filter-dropdown-list/FilterDropdonwList';

export const FilterDropdown = ({
  data=[],
  icon,
  placeholder
}
) => {

  const [opened, setOpened] = useState(false);
  const ref = useRef(null);

  useOutsideAlerter(ref, ()=>{
    setOpened(false);
  });

  return (
    <div 
      ref={ref} 
      className={`${styles.block} ${opened?styles.opened:''}`}
      >
      <button className={`btn-reset ${styles.btn}`} onClick={()=>setOpened(!opened)}>
        <Icon icon={icon} />
        <span className={styles.placeholder}>{placeholder}</span>
        {
          data.length && <span className={styles.arrow}><Icon icon={'arrow'}/></span>
        }
      </button>

      {
        data.length
        ? <FilterDropdonwList data={data} openedParent={opened}/>
        : ''
      }
    </div>
  );
};
