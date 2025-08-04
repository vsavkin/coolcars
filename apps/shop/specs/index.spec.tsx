import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the shop title', () => {
    const { getByText } = render(<Page />);
    expect(getByText('VeryCoolCars Shop')).toBeTruthy();
  });

  it('should display all products', () => {
    const { getAllByRole } = render(<Page />);
    const links = getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
