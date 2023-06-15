import { useState } from 'react'
import axios from 'axios'
import Register from '@/components/sections/Register'

interface LoginPayload {
    email: string,
    password: string,
}


export default function Home() {


    const [email, setEmail] = useState("")
    const onchangeEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState("")
    const onchangePassword = (e: any) => {
        setPassword(e.target.value)
    }






    const loginUser = async (data: LoginPayload) => {
        try {
            const res = await axios.post("http://localhost:4000/login", data);
            console.log(res.data.user)
            localStorage.setItem("user", JSON.stringify(res.data.user.email));
            localStorage.setItem("token", res.data.accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (e: any) => {
        setEmail("");
        setPassword("");
        e.preventDefault();
        const loginData = {
            email: email,
            password: password,
        };
        loginUser(loginData);

    };
    return (
        <>
            <Register />
        </>
    )
}
