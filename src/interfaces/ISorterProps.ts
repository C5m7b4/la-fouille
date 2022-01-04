import { ISorterProperty } from './ISorterProperty';

export interface ISortersProps<T> {
  mainDivClassName?: string;
  mainDivStyle?: object;
  labelClassName?: string;
  labelText?: string;
  labelStyle?: object;
  selectClassName?: string;
  selectStyle?: object;
  selectOptionClassName?: string;
  selectOptionStyle?: object;
  dataSource: Array<T>;
  setSortProperty: (sortPropert: ISorterProperty<T>) => any;
}
