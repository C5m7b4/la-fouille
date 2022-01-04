import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Filters from './Filters';
import { people } from '../../mockData/people';

describe('Filters', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[]}
        setFilterProperties={(filterProperties) => {}}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });
  it('should render with isActive-truthy checked', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[{ property: 'isActive', isTruthySelected: true }]}
        setFilterProperties={(filterProperties) => {}}
      />
    );
    const checkbox: HTMLInputElement = screen.getByTestId('isActive-true');
    expect(checkbox.checked).toEqual(true);
  });
  it('should render with isActive-truthy unchecked', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[]}
        setFilterProperties={(filterProperties) => {}}
      />
    );
    const checkbox: HTMLInputElement = screen.getByTestId('isActive-true');
    expect(checkbox.checked).toEqual(false);
  });
  it('should render with isActive-falsy unchecked', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[]}
        setFilterProperties={(filterProperties) => {}}
      />
    );
    const checkbox: HTMLInputElement = screen.getByTestId('isActive-false');
    expect(checkbox.checked).toEqual(false);
  });
  it('should render with isActive-falsy checked', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[{ property: 'isActive', isTruthySelected: false }]}
        setFilterProperties={(filterProperties) => {}}
      />
    );
    const checkbox: HTMLInputElement = screen.getByTestId('isActive-false');
    expect(checkbox.checked).toEqual(true);
  });
  it('should response property to a checkbox change being fired', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[]}
        setFilterProperties={(filterProperties) => {}}
      />
    );

    const checkbox: HTMLInputElement = screen.getByTestId('isActive-false');
    expect(checkbox.checked).toEqual(false);

    fireEvent.click(checkbox);
    setTimeout(() => {
      expect(checkbox.checked).toEqual(true);
    }, 250);
  });
  it('should toggle the coorisponding checkbox if checked and the other checkbox change is fired', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[{ property: 'isActive', isTruthySelected: false }]}
        setFilterProperties={(filterProperties) => {}}
      />
    );

    const checkbox: HTMLInputElement = screen.getByTestId('isActive-false');
    expect(checkbox.checked).toEqual(true);
    const otherCheckbox: HTMLInputElement = screen.getByTestId('isActive-true');
    fireEvent.click(otherCheckbox);

    setTimeout(() => {
      expect(checkbox.checked).toEqual(false);
      expect(otherCheckbox.checked).toEqual(true);
    }, 250);
  });
  it('should get a full match if checkbox is already checked and gets checked again disabling the checkbox', () => {
    const { asFragment } = render(
      <Filters
        dataSource={people}
        filterProperties={[{ property: 'isActive', isTruthySelected: true }]}
        setFilterProperties={(filterProperties) => {}}
      />
    );

    const checkbox: HTMLInputElement = screen.getByTestId('isActive-true');
    fireEvent.click(checkbox);

    setTimeout(() => {
      expect(checkbox.checked).toEqual(false);
    }, 250);
  });
  it('should use an empty object if the database has not been received from the api', () => {
    const { asFragment } = render(
      <Filters
        dataSource={[]}
        filterProperties={[]}
        setFilterProperties={(filterProperties) => {}}
      />
    );

    expect(() => screen.getByTestId('isActive-true')).toThrowError(
      'Unable to find an element by: [data-testid="isActive-true"]'
    );
  });
});
