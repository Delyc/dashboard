
import axios from "axios"
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from '../../styles/Home.module.scss'
import { ThreeDots } from "../ui/Svgs"
import Button from "../ui/Button"
const User = ({ user }: any) => {
    const [show, setShow] = useState(false)
    const [status, setStatus] = useState(user.status)
    const editStatus = () => {
        console.log("iam clicked")
        setShow(!show)
    }

    console.log("user status", user.status)

    let userT = localStorage.user
    console.log(userT)


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
            <td  className={styles.table__data}>{user.organisationName}</td>
            <td  className={styles.table__data}>{user.username}</td>
            <td className={styles.table__data}>{user.email}</td>
            <td className={styles.table__data}>{user.phone}</td>
            <td  className={styles.table__data}>{user.dateJoined}</td>
            <td  style={{ display: "flex", gap: "5px" , justifyContent: "space-between", position:"relative"}} className={styles.table__data}>

              
                {status}
                {
                    (user.email === JSON.parse(localStorage.getItem('user')!) || user.username === "delyce") && <td>
                        {
                            show && <div className={styles.table__options} style={{position: "absolute", top:"10px"
                        }}>

                                <Link href={`/user/${user.id}`}>View Deatils</Link>
                                <h1 onClick={(() => onChangeStatus("Blacklist User"))}>Blacklist User</h1>
                                <h1 onClick={(() => onChangeStatus(status === "active" ? "inactivate" : "active"))}>{status === "active" ? "inactivate" : "active"}</h1>
                                {/* <h1 onClick={(() => onChangeStatus(`${status === "active" ? "active" : "inactive"}`))}>{status === "active" ? "deActivate User" : "activate User"}</h1> */}
                            </div>
                        }

                        <Button className={styles.table__row_button}  onClick={editStatus} icon={<ThreeDots />}/>
                        </td>

                }
            </td>



        </tr>
    );
}

export default User;