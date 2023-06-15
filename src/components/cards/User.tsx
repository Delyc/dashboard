
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import styles from '../../styles/Home.module.scss'
import { ActivateUser, Eye, ThreeDots, UserBlacklit } from "../ui/Svgs"
import Button from "../ui/Button"
const User = ({ user }: any) => {
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(user.status)
    const editStatus = () => {
        setShow(!show)
    }
    const onChangeStatus = (value: string) => {
        console.log("alue", value)
        setStatus(value)
        axios.patch(`http://localhost:4000/users/${user.id}`,
            {
                email: user.email,
                status: value,
                password: user.password
            })
    }

    return (
        <tr className={styles.table__row}>
            <td className={styles.table__data}>{user.organisationName}</td>
            <td className={styles.table__data}>{user.username}</td>
            <td className={styles.table__data}>{user.email}</td>
            <td className={styles.table__data}>{user.phone}</td>
            <td className={styles.table__data}>{user.dateJoined}</td>
            <td style={{ display: "flex", gap: "5px", justifyContent: "space-between", position: "relative" }} className={styles.table__data}>
                {status}
                {
                    (user.email === JSON.parse(localStorage.getItem('user')!) || user.username === "delyce") && <td>
                        {
                            show && <div className={styles.table__options} style={{
                                position: "absolute", top: "10px"
                            }}>

                                <Link className={styles.options__link} href={`/user/${user.id}`}><Eye /> View Deatils</Link>
                                <button className={styles.options__button} onClick={(() => onChangeStatus("Blacklist User"))}> <UserBlacklit /> Blacklist User</button>
                                <button className={styles.options__button} onClick={(() => onChangeStatus(status === "active" ? "inactivate" : "active"))}><ActivateUser /> {status === "active" ? "inactivate" : "active"}</button>
                            </div>
                        }
                        <Button className={styles.table__row_button} onClick={editStatus} icon={<ThreeDots />} />
                    </td>
                }
            </td>
        </tr>
    );
}

export default User;