import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchBar } from '../index'; // Update the import path as necessary

describe('SearchBar', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  it('should render with placeholder text', () => {
    render(<SearchBar />, { wrapper: Wrapper });
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  it('should display loading indicator when loading is true', () => {
    render(<SearchBar loading={true} />, { wrapper: Wrapper });
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput.getAttribute('data-loading')).toBe('true');
  });

  it('should call onSubmit when Enter key is pressed', () => {
    const mockOnSubmit = jest.fn();
    render(<SearchBar onSubmit={mockOnSubmit} />, { wrapper: Wrapper });
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should be disabled when loading is true', () => {
    render(<SearchBar loading={true} />, { wrapper: Wrapper });
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeDisabled();
  });
});
