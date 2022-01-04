import React, { useState } from 'react';
import { PropsWithChildrenFunction } from '../../interfaces';
import Toggles from '../Toggles';
import SearchInput from '../SearchInput';

import { ISorterProperty } from '../../interfaces/ISorterProperty';
import Sorters from '../Sorters';
import { SearchProps } from '../../interfaces/SearchProps';

import { genericSearch } from '../../generics';
import { genericSort } from '../../generics/genericSort';

export interface SearchState<T> {
  searchQuery: string;
  sortProperty: ISorterProperty<T>;
}

function Search<T>(props: PropsWithChildrenFunction<SearchProps<T>, T>) {
  const {
    showSearch,
    showSort,
    mainDivClassName = '',
    mainDivStyle = {},
    showToggleDiv = false,
    toggleDivClassName = '',
    toggleDivStyle = {},
    toggleMainDivStyle = {},
    toggleMainDivClassName = 'toggle-switch',
    toggleInputClassName = 'toggle-switch-checkbox',
    toggleInputStyle = {},
    toggleLabelClassName = 'toggle-switch-label',
    toggleLabelStyle = {},
    toggleLabelSpan1ClassName = 'toggle-switch-inner',
    toggleLabelSpan2ClassName = 'toggle-switch-switch',
    searchInputLabelText,
    searchInputMainDivStyle,
    searchInputMainDivClassName,
    searchInputLabelStyle,
    searchInputLabelClassName,
    searchInputInputStyle,
    searchInputInputClassName,
    searchInputPlaceholder,
    searchProperties,
    sortersMainDivStyle,
    sortersMainDivClassName,
    sortersLabelClassName,
    sortersLabelStyle,
    sortersLabelText,
    sortersSelectClassName,
    sortersSelectStyle,
    sortersSelectOptionClassName,
    sortersSelectOptionStyle,
    initialSortProperty,
    dataSource,
    children,
  } = props;
  const [searchState, setSearchState] = useState<SearchState<T>>({
    searchQuery: '',
    sortProperty: initialSortProperty,
  });
  const [liveShowSearch, setLiveShowSearch] = useState<boolean>(false);
  const [liveShowSort, setLiveShowSort] = useState<boolean>(false);
  const [liveShowFilter, setLiveShowFilter] = useState<boolean>(false);

  const { searchQuery, sortProperty } = searchState;

  const handleSearchChange = () => {
    setLiveShowSearch(!liveShowSearch);
  };

  const handleSortChange = () => {
    setLiveShowSort(!liveShowSort);
  };

  const handleFilterChange = () => {
    setLiveShowFilter(!liveShowFilter);
  };

  return (
    <div className={mainDivClassName} style={mainDivStyle}>
      <h2>Search Sort and Filter</h2>
      {showToggleDiv ? (
        <Toggles
          handleSearchChange={handleSearchChange}
          liveShowSearch={liveShowSearch}
          handleSortChange={handleSortChange}
          liveShowSort={liveShowSort}
          handleFilterChange={handleFilterChange}
          liveShowFilter={liveShowFilter}
          toggleDivClassName={toggleDivClassName}
          toggleDivStyle={toggleDivStyle}
          toggleMainDivStyle={toggleMainDivStyle}
          toggleMainDivClassName={toggleMainDivClassName}
          toggleInputClassName={toggleInputClassName}
          toggleInputStyle={toggleInputStyle}
          toggleLabelClassName={toggleLabelClassName}
          toggleLabelStyle={toggleLabelStyle}
          toggleLabelSpan1ClassName={toggleLabelSpan1ClassName}
          toggleLabelSpan2ClassName={toggleLabelSpan2ClassName}
        />
      ) : null}
      {(showSearch || liveShowSearch) && (
        <SearchInput
          labelText={searchInputLabelText}
          mainDivStyle={searchInputMainDivStyle}
          mainDivClassName={searchInputMainDivClassName}
          labelStyle={searchInputLabelStyle}
          labelClassName={searchInputLabelClassName}
          inputStyle={searchInputInputStyle}
          inputClassName={searchInputInputClassName}
          inputPlaceholder={searchInputPlaceholder}
          searchQuery={searchQuery}
          setSearchQuery={(searchQuery) =>
            setSearchState({
              ...searchState,
              searchQuery,
            })
          }
        />
      )}
      {(showSort || liveShowSort) && (
        <React.Fragment>
          <Sorters
            dataSource={dataSource}
            mainDivStyle={sortersMainDivStyle}
            mainDivClassName={sortersMainDivClassName}
            labelClassName={sortersLabelClassName}
            labelStyle={sortersLabelStyle}
            labelText={sortersLabelText}
            selectClassName={sortersSelectClassName}
            selectStyle={sortersSelectStyle}
            selectOptionClassName={sortersSelectOptionClassName}
            selectOptionStyle={sortersSelectOptionStyle}
            setSortProperty={(sortProperty) => {
              setSearchState({
                ...searchState,
                sortProperty,
              });
            }}
          />
          <br />
        </React.Fragment>
      )}
      {children &&
        dataSource
          .filter((a) => genericSearch(a, searchProperties, searchQuery, false))
          .sort((a, b) => genericSort(a, b, sortProperty))
          .map((a) => children(a))}
    </div>
  );
}

export default Search;
