import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Sorters from './Sorters';
import { people } from '../../mockData/people';

describe('Sorters', () => {
  it('should render corretly', () => {
    const { asFragment } = render(
      <Sorters dataSource={people} setSortProperty={(sortProperty) => {}} />
    );

    expect(asFragment).toMatchSnapshot();
  });
  it('should use an empty object if no array is present', () => {
    const { asFragment } = render(
      <Sorters dataSource={[]} setSortProperty={(sortProperty) => {}} />
    );

    expect(() => screen.getByTestId('ss-firstName-true')).toThrowError(
      'Unable to find an element by: [data-testid="ss-firstName-true"]'
    );
  });
  it('should handle change event', () => {
    const { asFragment } = render(
      <Sorters dataSource={people} setSortProperty={(sortProperty) => {}} />
    );

    const selectElement: HTMLSelectElement =
      screen.getByTestId('sorter-select');
    fireEvent.change(selectElement, 2);
    expect(selectElement.value).toEqual('firstName-true');
  });
});
