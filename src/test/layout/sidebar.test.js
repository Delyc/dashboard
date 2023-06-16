import { render, screen } from '@testing-library/react';
import Sidebar from '../../components/layouts/sidebar/Sidebar'
import '@testing-library/jest-dom';


describe('Sidebar component', () => {
  test('renders sidebar items', () => {
    render(<Sidebar />);
    
    // Check if the sidebar items are rendered
    const switchOrganisationItem = screen.getByText('switch organisatin');
    const dashboardItem = screen.getByText('Dashboard');
    
    expect(switchOrganisationItem).toBeInTheDocument();
    expect(dashboardItem).toBeInTheDocument();
  });

  test('renders customer category items', () => {
    render(<Sidebar />);
    
    // Check if the customer category items are rendered
    const usersItem = screen.getByText('Users');
    const guarantorsItem = screen.getByText('Guarantors');
    const loansItem = screen.getByText('Loans');
    // Add more assertions for other customer items
    
    expect(usersItem).toBeInTheDocument();
    expect(guarantorsItem).toBeInTheDocument();
    expect(loansItem).toBeInTheDocument();
    // Add more assertions for other customer items
  });

  test('renders businesses category items', () => {
    render(<Sidebar />);
    
    // Check if the businesses category items are rendered
    const organizationItem = screen.getByText('Organization');
    const loanProductsItem = screen.getByText('Loan Products');
    const savingsProductsItem = screen.getByText('Savings Products');
    // Add more assertions for other businesses items
    
    expect(organizationItem).toBeInTheDocument();
    expect(loanProductsItem).toBeInTheDocument();
    expect(savingsProductsItem).toBeInTheDocument();
    // Add more assertions for other businesses items
  });

  test('renders settings category items', () => {
    render(<Sidebar />);
    
    // Check if the settings category items are rendered
    const preferencesItem = screen.getByText('Preferences');
    const feesPricingItem = screen.getByText('Fees and Pricing');
    const auditLogsItem = screen.getByText('Audit Logs');
    // Add more assertions for other settings items
    
    expect(preferencesItem).toBeInTheDocument();
    expect(feesPricingItem).toBeInTheDocument();
    expect(auditLogsItem).toBeInTheDocument();
    // Add more assertions for other settings items
  });
});
