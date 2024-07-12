import filtersData from '../../data/filters';
import FilterItemInput from '../FilterItemInput/FilterItemInput';
import FilterItem from '../FilterItem/FilterItem';
import Label from '../Label/Label';
import classes from './Filterlist.module.css';

const renderFilterItemContent = (filterItemData) => {
  return (
    <div className={classes['button-lists']}>
      {filterItemData.buttonsLists.map((buttonsList, index) => {
        return (
          <ul
            className={classes['list']}
            key={`list${index}:${filterItemData.name}`}
          >
            {buttonsList.map((buttonData) => {
              return (
                <li className={classes['element']} key={buttonData.name}>
                  <Label
                    inputName={filterItemData.name}
                    htmlFor={buttonData.name}
                    inputType={buttonData.type}
                  >
                    {buttonData.title}
                  </Label>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default function Filterlist() {
  const firstFilterData = filtersData[0];

  return (
    <div className={`${classes['filter-list-wrapper']} container`}>
      <div className={`${classes['filter-list']}`}>
        <FilterItemInput iconName="location" />

        <FilterItem
          type={'unnested'}
          iconName={firstFilterData.iconName}
          title={firstFilterData.title}
          key={firstFilterData.name}
        >
          {renderFilterItemContent(firstFilterData)}
        </FilterItem>

        <FilterItem iconName="filter" title={'Дополнительные фильтры'}>
          <ul>
            {filtersData.map((filterItemData, index) => {
              // пропуск уже отображающегося фильтра
              if (index === 0) {
                return;
              }

              return (
                <li
                  key={filterItemData.name}
                  className={classes['nested-filter']}
                >
                  <FilterItem
                    type={'nested'}
                    iconName={filterItemData.iconName}
                    title={filterItemData.title}
                  >
                    {renderFilterItemContent(filterItemData)}
                  </FilterItem>
                </li>
              );
            })}
          </ul>
        </FilterItem>
      </div>
      <div className={`${classes['reset-btn-wrapper']}`}>
        <button className={`${classes['reset-btn']}`} type="reset">
          Сбросить все фильтры
        </button>
      </div>
    </div>
  );
}
