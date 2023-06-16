import React from 'react';
import { render, screen, fireEvent , waitFor} from '@testing-library/react';
import FilterModal from '../../components/ui/FilterModal';
import '@testing-library/jest-dom';
import axios from 'axios'

describe('FilterModal component', () => {
  const mockSetFilterModal = jest.fn();
  const mockSetUsers = jest.fn();
  const mockOrganisation = [
    { value: 'org1', label: 'Organization 1' },
    { value: 'org2', label: 'Organization 2' },
  ];

  const submitFiter = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/users?isDelete=false${select ? `&organisationName=${select}` : ""}${email ? `&email=${email}` : ""}${username ? `&username=${username}` : ""}${phone ? `&phone=${phone}` : ""}${dateJoined ? `&dateJoined=${dateJoined}` : ""}${status ? `&status=${status}` : ""}`);
      setUsers(res.data);
    } catch (error) {
      // Handle the error
    }
    setFilterModal(false);
  };
  beforeEach(() => {
    render(
      <FilterModal
        setFilterModal={mockSetFilterModal}
        setUsers={mockSetUsers}
        organisation={mockOrganisation}
      />
    );
  });

  it('renders the filter modal', () => {
    expect(screen.getByText('Organisation')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });

//   it('calls submitFiter when the Filter button is clicked', async () => {
//     const mockSetUsers = jest.fn();
//     const mockSetFilterModal = jest.fn();

//     axios.get = jest.fn().mockResolvedValue({ data: [] });

//     render(
//       <FilterModal
//         setFilterModal={mockSetFilterModal}
//         setUsers={mockSetUsers}
//         organisation={[]}
//       />
//     );

//     await screen.findByText('Filter'); // Wait for the component to finish rendering

//     const submitFilterButton = screen.getByText('Filter');
//     fireEvent.click(submitFilterButton);

//     await screen.findByText('Reset'); // Wait for the axios.get mock to resolve

//     expect(mockSetUsers).toHaveBeenCalled();
//     expect(mockSetFilterModal).toHaveBeenCalledWith(false);
//   });


//   it('calls submitFiter when the Filter button is clicked', () => {
//     const submitFilterButton = screen.getByText('Filter');
//     fireEvent.click(submitFilterButton);
//     expect(mockSetUsers).toHaveBeenCalled();
//     expect(mockSetFilterModal).toHaveBeenCalledWith(false);
//   });

//   it('calls submitReset when the Reset button is clicked', () => {
//     const mockSetUsers = jest.fn();
//     const mockSetFilterModal = jest.fn();
  
//     render(<FilterModal setUsers={mockSetUsers} setFilterModal={mockSetFilterModal} />);
  
//     const resetButton = screen.getByTestId('reset-button-1');

  
//     resetButtons.forEach((resetButton) => {
//       expect(resetButton).toBeInTheDocument();
//       fireEvent.click(resetButton);
//     });
  
//     expect(mockSetUsers).toHaveBeenCalledTimes(resetButtons.length);
//     expect(mockSetFilterModal).toHaveBeenCalledWith(false);
//   });
  
  
  
  

  // Add more test cases as needed
});
