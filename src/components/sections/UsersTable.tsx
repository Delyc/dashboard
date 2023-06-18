import { useState, useEffect } from "react";
import User from "@/components/cards/User";
import { Filter } from "../ui/Svgs";
import styles from '../../styles/Home.module.scss'
import Button from "../ui/Button";
import FilterModal from "../ui/FilterModal";
import { useUsersQuery } from "@/redux/services/users";
import Pagination from "../ui/Pagination";
const UsersTable = () => {
  const [filterModal, setFilterModal] = useState(false);
  const { data, isLoading, isError, refetch } = useUsersQuery();
  const [users, setUsers] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of users to display per page

  useEffect(() => {
    setUsers(data);
  }, [data]);
  const tableItem = ["Organization name", "Username", "Email", "Phone number", "Date Joined", "Status"];

  const showFilterModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFilterModal(!filterModal);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const organizationArray: { value: any; label: any; }[] = [];
  data?.forEach((item: any) => {
    organizationArray.push({ value: `${item.organisationName}`, label: `${item.organisationName}` });
  });

  // Pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users && users?.slice(indexOfFirstUser, indexOfLastUser);
  const totalUsers = users?.length;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users.</div>;
  }

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.table__heading}>
          <tr className={styles.table__row}>
            {tableItem.map((item: string, index: number) => {
              return (
                <th className={styles.table__header} key={index}>
                  <div className={styles.test}>
                    <p className={styles.table__header_name}>{item}</p>
                    <Button onClick={showFilterModal} icon={<Filter />} className={styles.table__button} />
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {filterModal && <FilterModal organisation={organizationArray} setUsers={setUsers} setFilterModal={setFilterModal} />}
          {currentUsers && currentUsers?.map((user: any, index: any) => {
            console.log("tetsds", user)
            return (
              <User refetch={refetch} key={index} user={user} />
            )
          })}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalItems={totalUsers || 0}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default UsersTable;
