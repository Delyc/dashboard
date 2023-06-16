import { render, screen } from '@testing-library/react';
import SidebarCategory from '../../components/layouts/sidebar/SidebarCategory';
import '@testing-library/jest-dom';


describe('SidebarCategory component', () => {
  const category = [
    { icon: '<Icon1 />', text: 'Item 1' },
    { icon: '<Icon2 />', text: 'Item 2' },
    { icon: '<Icon3 />', text: 'Item 3' },
  ];
  const title = 'Category Title';

  test('renders category title and items', () => {
    render(<SidebarCategory category={category} title={title} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const itemElements = screen.getAllByRole('link');
    expect(itemElements).toHaveLength(category.length);

    itemElements.forEach((itemElement, index) => {
      const item = category[index];
      expect(itemElement).toHaveTextContent(item.text);
    });
  });
});
