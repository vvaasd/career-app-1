import { useEffect, useRef, useState } from 'react';

import styles from './FilterItem.module.css';

import { Dropdown } from '@components/UI/Dropdown/Dropdown';
import { Input } from '@components/UI/Input/Input';
import { prepareStringToCompare } from '@utils/prepearStringToCompare';
import { Checkbox } from '@components/UI/Checkbox/Checkbox';
import { useVacancyStore } from '@store/vacancyStore';
import { CityList } from './CityList/CityList';
import { useResize } from '@hooks/useResize';
import { SIZE_CONTAINER } from '@constants';
import { DropdownExternal } from '@components/UI/Dropdown/DropdownExternal';

export const FilterItem = ({
  type = 'input',
  name,
  text,
  icon: Icon,
  items,
  isDropdownActive,
  setIsDropdownActive,
  isInputActive,
  setisInputActive,
}) => {
  const [cityValue, setCityValue] = useState('');
  const [isShowCitiesList, setIsShowCitiesList] = useState(false);
  const [foundCities, setFoundCities] = useState([]);
  const [focus, setFocus] = useState(false);
  const { filters } = useVacancyStore();
  const inputRef = useRef(null);

  const screenType = useResize()

  const handleChange = (e) => {
    let value = e.target.value;
    setCityValue(value);
    value = prepareStringToCompare(value);
    if (value.length > 2) {
      const found = {};
      for (let key in items) {
        if (
          items.hasOwnProperty(key) &&
          prepareStringToCompare(items[key]).startsWith(value)
        )
          found[key] = items[key];
      }
      setFoundCities(found);
      setIsShowCitiesList(true);
    } else setIsShowCitiesList(false);
  };

  useEffect(() => {
    setisInputActive(focus)
  }, [focus])

  return (
    <>
      {type === 'dropdown' ? (
        screenType === SIZE_CONTAINER.mobile ?
          !isInputActive &&
          <DropdownExternal
            isActive={isDropdownActive}
            setIsActive={setIsDropdownActive}
            name={name}
            className={styles.dropdownWrapper}
            placeholder={screenType === SIZE_CONTAINER.mobile && !isDropdownActive ? '' : text}
            icon={Icon}
            items={items}
          /> :
          <Dropdown name={name} className={styles.dropdownWrapper} placeholder={text} icon={Icon} items={items} />
      ) : (
        <div
          className={styles.dropdown}
          onFocusCapture={() => {
            setFocus(true);
          }}
          onBlurCapture={() => {
            setFocus(false);
          }}
        >
          {screenType === SIZE_CONTAINER.mobile && isDropdownActive ? <></> : <> <Input
            ref={inputRef}
            name={name}
            placeholder={text}
            icon={Icon}
            value={cityValue}
            id={'citiesFilter'}
            onChange={handleChange}
            className={
              `${(isShowCitiesList && !!Object.keys(foundCities).length) ||
                (!!filters.area.length && focus)
                ? styles.input
                : ''} ${focus && styles.inputAbs}`
            }
            autoComplete='off'
          />
            {(isShowCitiesList && !!Object.keys(foundCities).length && (
              <CityList
                cities={foundCities}
                inputRef={inputRef}
                clearInputValue={() => {
                  handleChange({ target: { value: '' } });
                }}
                isCheckedCityList={true}
                className={styles.dropdownList}
              />
            )) ||
              (!!filters.area.length && (
                <CityList
                  cities={filters.area}
                  inputRef={inputRef}
                  textItems={items}
                  className={styles.dropdownList}
                />
              ))}</>}

        </div>
      )}
    </>
  );
};
