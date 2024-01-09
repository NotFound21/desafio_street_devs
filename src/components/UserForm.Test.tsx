import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';
import { UserProvider } from '../context/UserContext';

describe('UserForm', () => {
  it('allows adding a new user', () => {
    render(
      <UserProvider>
        <UserForm />
      </UserProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'johndoe@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /add user/i }));

    expect(screen.getByPlaceholderText(/name/i)).toHaveValue('');
    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('');
  });
});