import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/ui/Button'
import loginImage from '../../public/assets/loginImage.svg'
import Input from '@/components/ui/Input'
import logo from '../../public/assets/logo.svg'
import { useState } from 'react'
import axios from 'axios'

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
            <section className={styles.container}>
                <div className={styles.logo}>
                    <Image src={logo} className={styles.logo_image} alt='Logo' />
                </div>
                <div className={styles.login}>
                    <div className={styles.login__image_section}>
                        <Image className={styles.login__image} src={loginImage} layout='fill' alt='man' />
                    </div>
                    <div className={styles.login__form_section}>
                        <div className={styles.login__content}>
                            <h1 className={styles.login__heading}>Welcome</h1>
                            <p className={styles.login__description}>Enter details to login.</p>
                        </div>
                        <form className={`${styles.login__form}`}>
                            <Input className={styles.login__input} placeholder='Email' name={email} value={email} onChange={onchangeEmail} />
                            <div className={styles.login__show}>
                                <Input className={`${styles.login__input} ${styles.login__input_showPassword}`} placeholder='Password' name={password} value={password} onChange={onchangePassword} />
                                <p className={styles.login__showPassword}>SHOW</p>

                            </div>
                            <p className={styles.login__forgotPassword}>Forgot PASSWORD?</p>
                            <Button text="log in" className={styles.login__button} />
                            

                            <button onClick={(e) => onSubmit(e)} type="submit">
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
