import { render, screen } from '@testing-library/react';
import SidebarItem from '../../components/layouts/sidebar/SidebarItem';
import '@testing-library/jest-dom';


describe('SidebarItem component', () => {
  test('renders the icon and text', () => {
    const icon = <svg data-testid="icon" />;
    const text = 'Test Item';
    render(<SidebarItem icon={icon} text={text} />);
    
    // Check if the icon and text are rendered
    const renderedIcon = screen.getByTestId('icon');
    const renderedText = screen.getByText('Test Item');
    
    expect(renderedIcon).toBeInTheDocument();
    expect(renderedText).toBeInTheDocument();
  });

  test('renders a link with the correct href', () => {
    const icon = <svg />;
    const text = 'Test Item';
    const href = '/test';
    render(<SidebarItem icon={icon} text={text} href={href} />);
    
    // Check if the link has the correct href attribute
    const linkElement = screen.getByRole('link');
    
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  test('applies the correct class name', () => {
    const icon = <svg />;
    const text = 'Test Item';
    render(<SidebarItem icon={icon} text={text} />);
    
    // Check if the element has the correct class name
    const itemElement = screen.getByText('Test Item');
    
    expect(itemElement).toHaveClass('sidebarList__item');
  });
});
