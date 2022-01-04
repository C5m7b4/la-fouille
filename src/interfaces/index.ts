import { ReactNode } from 'react';

export type PropsWithChildrenFunction<P, T> = P & {
  children?(item: T): ReactNode;
};

export { IFilterProperty } from './IFilterProperty';
export { IFilterProps } from './IFilterProps';
export { ISorterProperty } from './ISorterProperty';
export { ISortersProps } from './ISorterProps';
export { SearchInputProps } from './SearchInputProps';
export { SearchProps } from './SearchProps';
