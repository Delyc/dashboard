import { useState, useEffect } from "react";
import axios from "axios";
import User from "@/components/cards/User";
import { Filter } from "../ui/Svgs";
import styles from '../../styles/Home.module.scss'
import Button from "../ui/Button";
import FilterModal from "../ui/FilterModal";
import { useUsersQuery } from "@/redux/services/users";

const UsersTable = () => {
    const [users, setUsers] = useState([])
    const [filterModal, setFilterModal] = useState(false)

    const { data , isLoading, isError ,refetch} = useUsersQuery()
    const showFilterModal = (e: any) => {
        e.preventDefault()
        setFilterModal(!filterModal)

    }
    const tableItem = ["Organization name", "username", "Email", "phone number", "DAte Joined", "Status"]
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching todos.</div>;
      }
    return (

        <table className={styles.table}>
            <thead className={styles.table__heading}>
                <tr className={styles.table__row}>
                    {tableItem.map((item: string, index: number) => {
                        return (
                            <th className={styles.table__header} key={index}>
                                <div className={styles.test}>
                                    <p className={styles.table__header_name}>{item}
                                    </p>
                                    <Button onClick={showFilterModal} icon={<Filter />} className={styles.table__button} />
                                </div>
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody className={styles.table__body}>
                {filterModal && <FilterModal setUsers={setUsers} setFilterModal={setFilterModal} />}
                {data && data.map((user: any, index: any) => {
                    return (
                        <User refetch={refetch} key={index} user={user} />
                    )
                })}
            </tbody>
        </table>
    );
}
export default UsersTable;