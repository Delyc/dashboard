
import axios from "axios"
import { useState, useEffect } from "react"
const User = ({user} : any) => {
    const [show, setShow] = useState(false)
    const [status,setStatus]  = useState(user.status)
    const editStatus = (        ) => {
        console.log("iam clicked") 
        setShow(!show) 
    }
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
        <td >
            {
                show && <div>
                <h1 onClick={(()=>onChangeStatus("active"))}>active</h1>
                <h1 onClick={(()=>onChangeStatus("dead"))}>dead</h1>
            </div>
            }
            <button onClick={editStatus}>...</button></td>

    </tr>
     );
}
 
export default User;