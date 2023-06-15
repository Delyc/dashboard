import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Register from '../components/sections/Register';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Register', () => {
  test('renders Register component', () => {
    const pushMock = jest.fn();

    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    render(<Register />);

    // Make assertions about the rendered component
    const organisationNameInput = screen.getByPlaceholderText('Organisation name');
    const phoneInput = screen.getByPlaceholderText('phone');
    const submitButton = screen.getByRole('button', { name: 'Register' });

    // Interact with the form inputs
    fireEvent.change(organisationNameInput, { target: { value: 'Test Org' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.click(submitButton);

    // Make assertions about the form values and behavior
    expect(organisationNameInput.value).toBe('Test Org');
    expect(phoneInput.value).toBe('1234567890');
    // Add more assertions as needed
  });
});
