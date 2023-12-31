
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import styles from '../../styles/Home.module.scss'
import { ActivateUser, Eye, ThreeDots, UserBlacklit } from "../ui/Svgs"
import Button from "../ui/Button"
import { toast } from "react-toastify"
const User = ({ user,refetch }: any) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL
    const [show, setShow] = useState(false)
    const [userStatus, setStatus] = useState(user.userStatus)
    const editStatus = () => {
        setShow(!show)
    }
    const onChangeStatus = (value: string) => {
        console.log("alue", value)
        setStatus(value)
        toast.success("User status updated")
        axios.patch(`${baseUrl}/lendUsers/${user.id}`,
            {
                userStatus: value,
            })
            refetch()
            setShow(false)
    }


  

    return (
        <tr className={`${styles.table__row} ${styles.table__row_mobile}`}>
            <td className={styles.table__data}>{user.organisationName}</td>
            <td className={styles.table__data}>{user.username}</td>
            <td className={styles.table__data}>{user.email}</td>
            <td className={styles.table__data}>{user.phone}</td>
            <td className={styles.table__data}>{user.dateJoined}</td>
            <td  style={{ display: "flex", alignItems:"center" , gap: "5px", justifyContent: "space-between", position: "relative"}} className={styles.table__data}>
               
               <p className={styles.table__data_status} style={{backgroundColor:userStatus === 'active' ? "#39cd6317" : userStatus === "pending" ? "#e9b30021": userStatus === "inactivate" ? "#545f7d17" : "#e4033b23", color:userStatus === 'active' ? "green" : userStatus === "pending" ? "#E9B200": userStatus === "inactivate" ? "#545F7D" : "#E4033B"}}>{userStatus} </p> 
                {
                <td>
                        {
                            show && <div className={styles.table__options} style={{
                                position: "absolute", top: "10px"
                            }}>

                                <Link className={styles.options__link} href={`/user/${user.id}`}><Eye /> View Deatils</Link>
                                <button className={styles.options__button} onClick={(() => onChangeStatus("Blacklisted"))}> <UserBlacklit /> Blacklist User</button>
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