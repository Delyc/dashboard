import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../components/ui/Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
  it('renders the button with the provided text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button text={buttonText} />);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('renders the button with the provided className', () => {
    const className = 'custom-button';
    const { getByText } = render(<Button text="Click me" className={className} />);
    const button = getByText('Click me');
    expect(button).toHaveClass(className);
  });

  it('calls the onClick event handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={onClickMock} />);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

});
