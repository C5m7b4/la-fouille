import { ReactNode } from 'react';

export type PropsWithChildrenFunction<P, T> = P & {
  children?(item: T): ReactNode;
};
