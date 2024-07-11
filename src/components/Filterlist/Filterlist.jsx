import filtersData from '../../data/filters';
import FilterItemInput from '../FilterItemInput/FilterItemInput';
import FilterItem from '../FilterItem/FilterItem';
import Label from '../Label/Label';
import classes from './Filterlist.module.css';

const renderFilterItem = (filterItemData, type = 'unnested') => {
  return (
    <FilterItem
      type={type}
      iconName={filterItemData.iconName}
      title={filterItemData.title}
      key={filterItemData.name}
    >
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
    </FilterItem>
  );
};

export default function Filterlist() {
  const firstFilterData = filtersData[0];

  return (
    <div className={`${classes['filter-list-wrapper']} container`}>
      <div className={`${classes['filter-list']}`}>
        <FilterItemInput iconName="location" />

        {renderFilterItem(firstFilterData)}

        <FilterItem iconName="filter" title={'Дополнительные фильтры'}>
          {filtersData.map((filterData, index) => {
            if (index === 0) {
              return;
            }

            return renderFilterItem(filterData, 'nested');
          })}
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
