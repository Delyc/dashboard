
import { useState, useEffect } from "react";
import axios from "axios";
import User from "@/components/cards/User";
const Users = () => {


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

    



    return (
        <>
            <h1>Gett all users</h1>

            <table>
                <thead>
                    <tr>
                        <th>Org name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>date joined</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user: any, index: any) => {
                        return (
                             <User  key={index} user={user}/>
                        )
                    })}


                </tbody>
            </table>
        </>
    );
}

export default Users;