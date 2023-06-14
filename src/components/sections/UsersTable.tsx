import { useState, useEffect } from "react";
import axios from "axios";
import User from "@/components/cards/User";
import { Filter } from "../ui/Svgs";
import styles from'../../styles/Home.module.scss'

const UsersTable = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("http://localhost:4000/users/");
                setUsers(res.data);
                console.log(res.data)
            } catch (error) {
                console.error(error);
            }
        };
        getUsers();
    }, []);


    const tableItem = ["Organiation name", "username", "Email", "DAte Joined", "Status"]

    return ( 

        <table className={styles.table}>
        <thead className={styles.table__heading}>
            <tr className={styles.table__row}>
                {tableItem.map((item: string, index: number) => {
                    return(
                        <th className={styles.table__header} key={index}>{item} {<Filter />}</th>
                    )
                })}

            </tr>
        </thead>
        <tbody className={styles.table__body}>

            {users.map((user: any, index: any) => {
                return (
                     <User  key={index} user={user}/>
                )
            })}


        </tbody>
    </table>

     );
}
 
export default UsersTable;