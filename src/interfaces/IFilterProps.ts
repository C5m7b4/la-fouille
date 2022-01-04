import { IFilterProperty } from './IFilterProperty';

export interface IFilterProps<T> {
  dataSource: Array<T>;
  filterProperties: Array<IFilterProperty<T>>;
  setFilterProperties(filterProperties: Array<IFilterProperty<T>>): void;
  filterExclusions?: Array<IFilterProperty<T>>;
  filterCheckboxClassName?: string;
  mainDivClassName?: string;
  mainDivStyle?: object;
  labelStyle?: object;
  labelClassName?: string;
  checkboxStyle?: object;
  checkboxClassName?: string;
  checkboxLabelStyle?: object;
  checkboxLabelClassName?: string;
}
