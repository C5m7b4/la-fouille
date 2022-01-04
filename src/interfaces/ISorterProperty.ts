export interface ISorterProperty<T> {
  property: Extract<keyof T, string | number | Date | boolean>;
  isDescending: boolean;
}
