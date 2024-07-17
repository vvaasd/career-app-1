import { useState } from 'react';
import { Icon } from '../../icon/Icon';
import Checkbox from '../../ui/checkbox/Checkbox';
import Radio from '../../ui/radio/Radio';
import styles from './styles.module.css';

const FilterDropdonwList = ({data, openedParent}) => {

  const [items, setItems] = useState(data);

  const handleShowSection = (id) => {
    setItems(items.map(el=>{
      if(el.id === id) {
        return {...el, opened: !el.opened}
      } else {
        return el;
      }
    }));
  }

  return (
    <ul className={`scrollbar-main ${styles.block} ${openedParent? styles.openedParent:''}`}>
      {
        items.map(el=>
       
          el.items ? 
          <li key={el.id} className={`${!el.title ? styles.nosection: styles.section} ${el.title && el.opened || !el.title ?styles.opened:styles.closed}`}>
            {
              el.title ? 
              <button 
                onClick = {()=>handleShowSection(el.id)}
                className={`btn-reset ${styles.title}`}
              >
                {el.icon? el.icon: ''}
                {el.title}
                <span className={styles.arrow}><Icon icon={'arrow'}/></span>
              </button>
              : ''
            }
            <ul className={`list-reset ${styles.list} `}>
            {
              el.multyple
              ?
                el.items.map(subEl=>
                  <li key={subEl.name}>
                    <Checkbox 
                      className={styles.item}
                      name={el.name}>
                        {subEl.name}
                    </Checkbox>
                  </li>
                )
              :
                el.items.map(subEl=>
                  <li key={subEl.name}>
                    <Radio 
                      className={styles.item} 
                      name={el.name}>
                        {subEl.name}
                    </Radio>
                  </li>
                )
            }
            </ul>
            {
              el.otherItems && el.otherItems.length
              ? 
                el.otherItems.map(otherEl=>
                  otherEl.items 
                  ? 
                    <ul key={otherEl.id} className={`list-reset ${styles.list} `}>
                    {
                      otherEl.multyple
                        ?
                        otherEl.items.map(otherSubEl=>
                          <li key={otherSubEl.name}>
                            <Checkbox 
                              className={styles.item}
                              name={otherEl.name}>
                                {otherSubEl.name}
                            </Checkbox>
                          </li>
                        )
                        :
                        otherEl.items.map(otherSubEl=>
                          <li key={otherSubEl.name}>
                            <Radio 
                              className={styles.item} 
                              name={otherEl.name}>
                                {otherSubEl.name}
                            </Radio>
                          </li>
                        )
                    }
                    </ul>
                  : '' 
                )
              : ''
            }
          </li>
          : ''
         
          
        )
      }
   
    </ul>
  );
};

export default FilterDropdonwList;