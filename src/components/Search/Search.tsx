import React, { useState } from 'react';
import { PropsWithChildrenFunction } from '../../interfaces';
import { SearchProps } from './SearchProps';

function Search<T>(props: PropsWithChildrenFunction<SearchProps<T>, T>) {
  const [searchText, setSearchText] = useState<string>('Hello world');
  return (
    <div>
      <input
        type="text"
        name="search-txt"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default Search;
