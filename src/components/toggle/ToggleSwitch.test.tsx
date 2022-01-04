import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import { render } from '@testing-library/react';

describe('Toggle Switch Component', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(
      <ToggleSwitch active={true} handleChange={() => {}} />
    );

    expect(asFragment).toMatchSnapshot();
  });
});
