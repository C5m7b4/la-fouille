import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchInput from './SearchInput';
import { people } from '../../mockData/people';

describe('Sorters', () => {
  it('should render corretly', () => {
    const { asFragment } = render(
      <SearchInput searchQuery="mi" setSearchQuery={(query) => {}} />
    );

    expect(asFragment).toMatchSnapshot();
  });
  it('should allow the input to change', () => {
    const { asFragment } = render(
      <SearchInput searchQuery="" setSearchQuery={(query) => {}} />
    );

    console.log(asFragment);

    const searchInput: HTMLInputElement = screen.getByTestId('search-input');
    searchInput.value = 'mi';
    expect(searchInput.value).toEqual('mi');
  });
});
