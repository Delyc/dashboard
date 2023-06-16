// import { render, screen, fireEvent } from '@testing-library/react';
// import { useRouter } from 'next/router';
// import Login from '../components/sections/Login';
// import { useForm } from 'react-hook-form';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// describe('Login component', () => {
//   beforeEach(() => {
//     render(<Login />);
//   });

//   it('renders the login form', () => {
//     const emailInput = screen.getByPlaceholderText('Email');
//     const passwordInput = screen.getByPlaceholderText('Password');
//     const loginButton = screen.getByRole('button', { name: 'log in' });

//     expect(emailInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
//     expect(loginButton).toBeInTheDocument();
//   });

//   it('handles form submission successfully', async () => {
//     const mockPush = jest.fn();
//     useRouter.mockReturnValueOnce({ push: mockPush });

//     render(<Login />);

//     const emailInput = screen.getByPlaceholderText('Email');
//     const passwordInput = screen.getByPlaceholderText('Password');
//     const loginButton = screen.getByRole('button', { name: 'log in' });

//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
//     fireEvent.click(loginButton);

//     // Assertions for form submission
//     expect(mockPush).toHaveBeenCalledWith('/dashboard');
//     // Add more assertions as needed
//   });

//   it('handles form submission error', async () => {
//     const mockPush = jest.fn();
//     useRouter.mockReturnValueOnce({ push: mockPush });

//     render(<Login />);

//     const emailInput = screen.getByPlaceholderText('Email');
//     const passwordInput = screen.getByPlaceholderText('Password');
//     const loginButton = screen.getByRole('button', { name: 'log in' });

//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
//     fireEvent.click(loginButton);

//     // Assertions for form submission error
//     expect(mockPush).not.toHaveBeenCalled();
//     // Add more assertions as needed
//   });
// });
