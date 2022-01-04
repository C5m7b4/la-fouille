import { IFilterProperty } from './IFilterProperty';
import { ISorterProperty } from './ISorterProperty';

export interface SearchProps<T> {
  /**
   * show Search
   */
  showSearch: boolean;
  /**
   * show Sorters
   */
  showSort: boolean;
  /**
   * show Filters
   */
  showFilters: boolean;
  /**
   * Normally an Array of objects used for searching, sorting, and filtering
   */
  dataSource: Array<T>;
  /**
   * Optional classname to be applied to the main component div
   */
  mainDivClassName?: string;
  /**
   * optional object that can be used to css style the main component div
   */
  mainDivStyle?: object;
  /**
   * opotional: classname for the title div
   */
  titleDivClassName?: string;
  /**
   * optional: css style object for the title div
   */
  titleDivStyle?: object;
  /**
   * The title for the main component
   */
  title: string;
  /**
   * Properties of the main object that can be searchable
   */
  searchProperties: Array<keyof T>;
  /**
   * The initial property to sort on
   */
  initialSortProperty: ISorterProperty<T>;
  /**
   * Properties of the main object that can be filtered on
   */
  filterProperties: Array<keyof T>;
  /**
   * The initial properties to filter on
   */
  initialFilterProperties: Array<IFilterProperty<T>>;
  /**
   * optional: The main css style for the SearchInput component
   */
  searchInputMainDivStyle?: object;
  /**
   * optional: The main classname for the Search Input component
   */
  searchInputMainDivClassName?: string;
  /**
   * optional: css style for the label in the Search Input component
   */
  searchInputLabelStyle?: object;
  /**
   * optional: text for the label in the Search Input component
   */
  searchInputLabelText?: string;
  /**
   * optional: className for the label in the Search Input component
   */
  searchInputLabelClassName?: string;
  /**
   * optional: css style for the input element in the Searh Input component
   */
  searchInputInputStyle?: object;
  /**
   * optional: classname for the input element in the Search Input component
   */
  searchInputInputClassName?: string;
  /**
   * optional: placeholder for the input element in the Search Input component
   */
  searchInputPlaceholder?: string;
  /**
   * optional: css style object for the sorters main div component
   */
  sortersMainDivStyle?: object;
  /**
   * optional: classname for the main div in the sorters component
   */
  sortersMainDivClassName?: string;
  /**
   * optional: classname for the label in the sorters component
   */
  sortersLabelClassName?: string;
  /**
   * optional: css style for the label in the sorters component
   */
  sortersLabelStyle?: object;
  /**
   * optional: text for the label in the sorters component
   */
  sortersLabelText?: string;
  /**
   * optional: classname for the select element in the sorters component
   */
  sortersSelectClassName?: string;
  /**
   * optional: css style for the select element in the sorters component
   */
  sortersSelectStyle?: object;
  /**
   * optional: classname for the select element in the sorters component
   */
  sortersSelectOptionClassName?: string;
  /**
   * optional: css style for the option elements of the select element in the sorters component
   */
  sortersSelectOptionStyle?: object;
  /**
   * optional: css style for the filters component
   */
  filterMainDivStyle?: object;
  /**
   * optional: classname for the main div in the filters component
   */
  filterMainDivClassName?: string;
  /**
   * optional: classname for main label for the filters component
   */
  filtersLabelClassName?: string;
  /**
   * optional: css style for the main label for the filters component
   */
  filtersLabelStyle?: object;
  /**
   * optional: css style for the checkboxes in the filters component
   */
  filtersCheckboxStyle?: object;
  /**
   * optional: classname for the checkboxes in the filters component
   */
  filtersCheckboxClassName?: string;
  /**
   * optional: css style for the checkbox labels in the filters component
   */
  filtersCheckboxLabelStyle?: object;
  /**
   * optional: cassname for the checkbox labels in the filters component
   */
  filtersCheckboxLabelClassName?: string;
  /**
   * optional: clssName for the toggle divs for users toggling showSearch, showSort, and showFilter
   */
  toggleDivClassName?: string;
  /**
   * optional: css style for the toggle divs for users toggling showSearch, showSort, and showFilter
   */
  toggleDivStyle?: object;
  /**
   * optional: boolean to decide if you want the users to be able to toggle showSearch, showSort, and showFilter
   */
  showToggleDiv?: boolean;
  /**
   * optional: classname for the toggle div container
   */
  toggleMainDivClassName?: string;
  /**
   * optional: css style object for the toggle div container
   */
  toggleMainDivStyle?: object;
  /**
   * optional: classname for the input of the toggle component
   */
  toggleInputClassName?: string;
  /**
   * optional: css style object for the input of the toggle component
   */
  toggleInputStyle?: object;
  /**
   * optional: classname of the label for the toggle component
   */
  toggleLabelClassName?: string;
  /**
   * optional: css style object for the label for the toggle component
   */
  toggleLabelStyle?: object;
  /**
   * optional: classname for the first span of the checkbox for the toggle component
   */
  toggleLabelSpan1ClassName?: string;
  /**
   * optional: classname for the second span of the checkbox for the toggle component
   */
  toggleLabelSpan2ClassName?: string;
}
