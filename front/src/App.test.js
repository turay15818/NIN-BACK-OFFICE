/* eslint-disable prettier/prettier */
import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import Login from './views/pages/login/Login'


describe('LoginForm component', () => {
  it.skip('renders email and password inputs', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  it.skip('handles input changes correctly', () => {
     render(<Login />);
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'men270992@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456Ab@' } });

    expect(emailInput.value).toBe('men270992@gmail.com');
    expect(passwordInput.value).toBe('123456Ab@');
  });

  it.skip('calls onSubmit with the email and password when the form is submitted', () => {
    const handleLogin = jest.fn();
    render(<Login onSubmit={handleLogin} />);
    const emailInput = screen.getByPlaceholderText('email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(emailInput, { target: { value: 'men270992@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456Ab@' } });
    fireEvent.click(button);
  });
});




