import { IFilterProperty } from '../interfaces/IFilterProperty';

export function genericFilter<T>(
  object: T,
  filterProperties: Array<IFilterProperty<T>>
): boolean {
  return filterProperties.every((filterProperty) => {
    const { property, isTruthySelected } = filterProperty;
    return isTruthySelected ? object[property] : !object[property];
  });
}
