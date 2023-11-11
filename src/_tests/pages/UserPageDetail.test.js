import React from 'react';
import { render, screen } from '@testing-library/react';
import UserPageDetail from '../../pages/UserPageDetail';

describe('UserPageDetail', () => {
  test('renders detail information message', () => {
    render(<UserPageDetail />);

    // Use screen.getByText to find the element containing the specified text
    const detailInformationElement = screen.getByText(/Gimme a detail information of all user selected/i);

    // Assert that the element is in the document
    expect(detailInformationElement).toBeInTheDocument();
  });
});
