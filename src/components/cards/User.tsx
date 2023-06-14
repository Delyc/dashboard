
import axios from "axios"
import { useState, useEffect } from "react"
import Link from "next/link"
const User = ({user} : any) => {
    const [show, setShow] = useState(false)
    const [status,setStatus]  = useState(user.status)
    const editStatus = (        ) => {
        console.log("iam clicked") 
        setShow(!show) 
    }

    console.log("user status", user.status)

    let userT = localStorage.user
    console.log(userT)

   
    const onChangeStatus = (value:string) =>{
        setStatus(value)
        axios.patch(`http://localhost:4000/users/${user.id}`, 
        {
            email: user.email,
            status:value,
            password: user.password
        })
    }

    
    return ( 
        <tr>
        <td >{user.organisationName}</td>
        <td >{user.username}</td>
        <td >{user.email}</td>
        <td >{user.dateJoined}</td>
        <td >{status}</td>
        {
            (user.email ===  JSON.parse(localStorage.getItem('user')!) || user.username === "delyce" )&&  <td >
            {
                show && <div>

                    <Link href={`/user/${user.id}`}>View Deatils</Link>
                <h1 onClick={(()=>onChangeStatus("Blacklist User"))}>Blacklist User</h1>
                <h1 onClick={(()=>onChangeStatus(`${user.status === "active" ? "active" : "inactive"}` ))}>{user.status === "active" ? "deActivate User" : "activate User"}</h1>
            </div>
            }
            <button onClick={editStatus}>...</button></td>
        }


    </tr>
     );
}
 
export default User;