import React, { FC, useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { SearchInputProps } from '../../interfaces/SearchInputProps';

function SearchInput(props: SearchInputProps) {
  const {
    searchQuery,
    setSearchQuery,
    mainDivStyle,
    mainDivClassName,
    labelStyle,
    labelClassName,
    labelText = 'Search',
    inputStyle,
    inputClassName,
    inputPlaceholder = 'Search...',
  } = props;
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div style={mainDivStyle} className={mainDivClassName}>
      <label style={labelStyle} className={labelClassName}>
        {labelText}: &nbsp;
      </label>
      <input
        style={inputStyle}
        className={inputClassName}
        data-testid="search-input"
        placeholder={inputPlaceholder}
        aria-label="search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
