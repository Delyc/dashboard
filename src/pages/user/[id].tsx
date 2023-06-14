import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
const User = () => {

    const router = useRouter()
    const query = router.query
    const id = query.id
    console.log("id", id)
    const [user, setUser] = useState()
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/users/${id}`);
                console.log("res", res.data)
                // setCar(res.data.data)

            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    return (
        <>
            <h1>helloooooo</h1>
        </>
    );
}

export default User;