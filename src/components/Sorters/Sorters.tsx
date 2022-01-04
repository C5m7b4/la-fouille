import React from 'react';
import { ISorterProperty } from '../../interfaces/ISorterProperty';
import { PropsWithChildrenFunction } from '../../interfaces/PropsWithChildrenFunction';

import { ISortersProps } from '../../interfaces/ISorterProps';

function Sorters<T>(props: PropsWithChildrenFunction<ISortersProps<T>, T>) {
  //destructure our props
  const {
    dataSource,
    mainDivClassName,
    mainDivStyle,
    labelClassName,
    labelStyle,
    labelText = 'Sort by',
    selectClassName,
    selectStyle,
    selectOptionClassName,
    selectOptionStyle,
    setSortProperty,
  } = props;

  const object = dataSource.length > 0 ? dataSource[0] : {};

  return (
    <div style={mainDivStyle} className={mainDivClassName}>
      <label className={labelClassName} style={labelStyle}>
        {labelText}: &nbsp;
      </label>
      <select
        style={selectStyle}
        data-testid={'sorter-select'}
        className={selectClassName}
        onChange={(e) => {
          const values = e.target.value.split('-');
          if (values.length === 2) {
            setSortProperty({
              property: values[0] as any,
              isDescending: values[1] === 'true',
            });
          }
        }}
      >
        {Object.keys(object).map((key, i) => (
          <React.Fragment key={`rfs-${i}`}>
            <option
              style={selectOptionStyle}
              className={selectOptionClassName}
              data-testid={`ss-${key}-true`}
              key={`sorter-${i}-true`}
              value={`${key}-true`}
            >
              {key} descending
            </option>
            <option
              style={selectOptionStyle}
              className={selectOptionClassName}
              data-testid={`ss-${key}-false`}
              key={`sorter-${i}-false`}
              value={`${key}-false`}
            >
              {key} ascending
            </option>
          </React.Fragment>
        ))}
      </select>
    </div>
  );
}

export default Sorters;
