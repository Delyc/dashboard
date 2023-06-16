import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../components/ui/Input'
import '@testing-library/jest-dom';


describe('Input component', () => {
  it('renders an input element with the provided props', () => {
    const className = 'custom-input';
    const placeholder = 'Enter text';
    const name = 'inputField';
    const value = 'Example value';
    const onChangeMock = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChangeMock}
      />
    );

    const inputElement = getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(className);
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveAttribute('value', value);

    fireEvent.change(inputElement, { target: { value: 'New value' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
