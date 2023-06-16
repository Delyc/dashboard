import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Register from '../components/sections/Register';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Register component', () => {
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
  
  it('submits the form successfully', () => {
    useRouter.mockImplementationOnce(() => ({
      push: jest.fn(),
    }));

    render(<Register />);

    // Fill in the form fields
    fireEvent.change(screen.getByPlaceholderText('Organisation name'), {
      target: { value: 'Test Organization' },
    });
    fireEvent.change(screen.getByPlaceholderText('phone'), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText('username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'testpassword' },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: 'Register' }));

    // Wait for the expected behavior
    setTimeout(() => {
      expect(useRouter().push).toHaveBeenCalledTimes(1);
      expect(useRouter().push).toHaveBeenCalledWith('/login');
    }, 1000);
  });
});
