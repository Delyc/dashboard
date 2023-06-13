import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/ui/Button'
import loginImage from '../../public/assets/loginImage.svg'
import Input from '@/components/ui/Input'
import logo from '../../public/assets/logo.svg'
import { useState } from 'react'
import axios from 'axios'

interface RegisterPayload {
    organisationName: string,
    phone: string,
    status: string,
    dateJoined: string,
    email: string,
    password: string,
    username: string
}


export default function Home() {

    const [organisationName, setOrganisationName] = useState("")
    const onChangeOrganiationName = (e: any) => {
        setOrganisationName(e.target.value)
    }
    const [phone, setPhone] = useState("")
    const onChangePhone = (e: any) => {
        setPhone(e.target.value)
    }
    const [status, setStatus] = useState()
    const onchangeStatus = (e: any) => {
        setStatus(e.target.value)
    }
    const [email, setEmail] = useState("")
    const onchangeEmail = (e: any) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState("")
    const onchangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const [username, setUsername] = useState("")
    const onChangeUsername = (e: any) => {
        setUsername(e.target.value)
    }


    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });


    const createUser = async (data: RegisterPayload) => {
        try {
            const res = axios.post("http://localhost:4000/users", data);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (e: any) => {
        setEmail("");
        setOrganisationName("");
        setPassword("");
        setPhone("");
        setUsername("")
        e.preventDefault();
        const regData = {
            organisationName: organisationName,
            phone: phone,
            status: 'active',
            email: email,
            username: username,
            password: password,
            dateJoined: formattedDate
        };
        createUser(regData);
        console.log(regData)

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
                            <Input className={styles.login__input} placeholder='Organisation name' name={organisationName} value={organisationName} onChange={onChangeOrganiationName} />
                            <Input className={styles.login__input} placeholder='phone' name={phone} value={phone} onChange={onChangePhone} />
                            <Input className={styles.login__input} placeholder='username' name={username} value={username} onChange={onChangeUsername} />
                            <Input className={styles.login__input} placeholder='Email' name={email} value={email} onChange={onchangeEmail} />
                            <div className={styles.login__show}>
                                <Input className={`${styles.login__input} ${styles.login__input_showPassword}`} placeholder='Password' name={password} value={password} onChange={onchangePassword} />
                                <p className={styles.login__showPassword}>SHOW</p>

                            </div>
                            <p className={styles.login__forgotPassword}>Forgot PASSWORD?</p>
                            {/* <Button text="log in" className={styles.login__button} />
                             */}

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
