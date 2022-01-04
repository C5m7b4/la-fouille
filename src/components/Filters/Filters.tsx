import React from 'react';
import { IFilterProperty } from '../../interfaces/IFilterProperty';
import { IFilterProps } from '../../interfaces/IFilterProps';

function Filters<T>(props: IFilterProps<T>) {
  const {
    dataSource,
    filterProperties,
    setFilterProperties,
    mainDivClassName,
    mainDivStyle,
    labelStyle,
    labelClassName,
    checkboxStyle,
    checkboxClassName,
    checkboxLabelStyle,
    checkboxLabelClassName,
  } = props;
  const object = dataSource.length > 0 ? dataSource[0] : {};

  const onChangeFilter = (property: IFilterProperty<T>) => {
    const propertyMatch = filterProperties.some(
      (filterProperty) => filterProperty.property === property.property
    );
    const fullMatch = filterProperties.some(
      (filterProperty) =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected === property.isTruthySelected
    );
    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        )
      );
    } else if (propertyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        ),
        property,
      ]);
    } else {
      setFilterProperties([...filterProperties, property]);
    }
  };

  return (
    <div className={mainDivClassName} style={mainDivStyle}>
      <label className={labelClassName} style={labelStyle}>
        Filters:
      </label>
      <br />
      {Object.keys(object).map((key, i) => {
        return (
          <React.Fragment key={`rff-${i}`}>
            <input
              style={checkboxStyle}
              className={checkboxClassName}
              type="checkbox"
              value={key}
              data-testid={`${key}-true`}
              onChange={() =>
                onChangeFilter({ property: key as any, isTruthySelected: true })
              }
              checked={filterProperties.some(
                (property) =>
                  property.property === key && property.isTruthySelected
              )}
            />
            <label
              style={checkboxLabelStyle}
              className={checkboxLabelClassName}
            >
              '{key}' is truthy
            </label>

            <input
              style={checkboxStyle}
              className={checkboxClassName}
              type="checkbox"
              value={key}
              data-testid={`${key}-false`}
              onChange={() =>
                onChangeFilter({
                  property: key as any,
                  isTruthySelected: false,
                })
              }
              checked={filterProperties.some(
                (property) =>
                  property.property === key && !property.isTruthySelected
              )}
            />
            <label
              style={checkboxLabelStyle}
              className={checkboxLabelClassName}
            >
              '{key}' is falsey
            </label>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Filters;
