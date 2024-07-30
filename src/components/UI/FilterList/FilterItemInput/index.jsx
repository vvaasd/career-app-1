import Dropdown from '@components/UI/Dropdown';
import Icon from '../../Icon';
import Label from '@components/UI/Label';
import FilterCounter from '@components/UI/FilterCounter';
import styles from './FilterItemInput.module.css';
import clsx from '@utils/clsx';
import { getAreasByName } from '@utils/getAreasByName';
import { useClickOutside } from '@hooks';
import useVacanciesData from '@store/useVacanciesData';
import useFilters from '@store/useFilters';
import useInputFilter from '@store/useInputFilter';
import { useState, useRef, useEffect } from 'react';

const INPUT_LENGTH_TO_SEARCH = 3;

export default function FilterItemInput({ iconName, pushRef }) {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(<></>);
  const inputValue = useInputFilter((state) => state.inputValue);
  const setInputValue = useInputFilter((state) => state.setInputValue);

  const resetCurPage = useVacanciesData((state) => state.resetCurPage);
  const handleFilterChange = useFilters((state) => state.handleFilterChange);
  const areasFilter = useFilters((state) => state.currentFilters.area);
  const filterItemRef = useRef(null);

  const getAreasJsx = (value) => {
    const idsOfAreasToShow = areasFilter.map((area) => area.id);
    return getAreasByName(value, {
      idsToShow: idsOfAreasToShow,
    }).map((area) => {
      return (
        <li className={styles['element']} key={area.id}>
          <Label
            inputName={'area'}
            htmlFor={area.id}
            inputType={'checkbox'}
            onClick={() => {
              resetCurPage();
              handleFilterChange('area', area);
            }}
            pushRef={pushRef}
            isCheckedByDefault={idsOfAreasToShow.includes(area.id)}
          >
            {area.name}
          </Label>
        </li>
      );
    });
  };
  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const strToSearch =
      newValue.length >= INPUT_LENGTH_TO_SEARCH ? newValue : '';
    const areasJsx = getAreasJsx(strToSearch);
    setDropdownContent(areasJsx);
  };

  const handleClearInput = () => {
    setInputValue('');
    setIsOpened(false);
  };

  useEffect(() => {
    if (inputValue) {
      setIsOpened(dropdownContent.length > 0);
    }
  }, [dropdownContent.length]);

  useEffect(() => {
    const areasJsx = getAreasJsx();
    setDropdownContent(areasJsx);
  }, []);

  useClickOutside(filterItemRef, () => {
    setIsOpened(false);
  });

  return (
    <div className={styles['wrapper']} ref={filterItemRef}>
      <div
        className={clsx(
          styles['input-wrapper'],
          isOpened && styles['is-opened']
        )}
      >
        <input
          value={inputValue}
          onInput={handleInput}
          onFocus={() => {
            setIsOpened(dropdownContent.length > 0);
          }}
          className={`${styles['input']}`}
          placeholder="Город"
        />
        {areasFilter.length ? (
          <FilterCounter
            count={areasFilter.length}
            className={styles['counter']}
          />
        ) : (
          <button className={styles['reset-btn']} onClick={handleClearInput}>
            <Icon name="xmark" />
          </button>
        )}
        <Icon name={iconName} className={styles['bg-icon']} />
      </div>
      <Dropdown isOpened={isOpened} type="unnested">
        <ul className={styles['list']}>{dropdownContent}</ul>
      </Dropdown>
    </div>
  );
}
