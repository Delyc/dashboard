import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/ui/Button'
import loginImage from '../../public/assets/loginImage.svg'
import Input from '@/components/ui/Input'
import logo from '../../public/assets/logo.svg'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

    // const [organisationName, setOrganisationName] = useState("")
    // const onChangeOrganiationName = (e: any) => {
    //     setOrganisationName(e.target.value)
    // }
    // const [phone, setPhone] = useState("")
    // const onChangePhone = (e: any) => {
    //     setPhone(e.target.value)
    // }
    // const [status, setStatus] = useState()
    // const onchangeStatus = (e: any) => {
    //     setStatus(e.target.value)
    // }
    // const [email, setEmail] = useState("")
    // const onchangeEmail = (e: any) => {
    //     setEmail(e.target.value)
    // }
    // const [password, setPassword] = useState("")
    // const onchangePassword = (e: any) => {
    //     setPassword(e.target.value)
    // }

    // const [username, setUsername] = useState("")
    // const onChangeUsername = (e: any) => {
    //     setUsername(e.target.value)
    // }


    const validationSchema = Yup.object().shape({
        organisationName: Yup.string().required("Organisation Name is required"),
        phone: Yup.string().required("Phone is required"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("password is required"),
        username: Yup.string().required("password is required"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState

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

    const onSubmit = (data : any) => {
            // setEmail("");
            // setOrganisationName("");
            // setPassword("");
            // setPhone("");
            // setUsername("")
        // e.preventDefault();
        const regData = {
            organisationName: data.organisationName,
            phone: data.phone,
            status: 'active',
            isDeleted: false,
            email: data.email,
            username: data.username,
            password: data.password,
            dateJoined: formattedDate
        };
        createUser(regData);
        console.log(data)

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
                        <form className={`${styles.login__form}`} onSubmit={handleSubmit(onSubmit)}>

                            <div>
                            <input {...register("organisationName")} className={styles.login__input} placeholder='Organisation name' name='organisationName' />

                                {/* <Input {...register("organisationName")} className={styles.login__input} placeholder='Organisation name' name={organisationName} value={organisationName} onChange={onChangeOrganiationName} /> */}
                                <div className="">{errors.organisationName?.message}</div>
                            </div>

                            <div>
                            <Input {...register("phone")} className={styles.login__input} placeholder='phone' name="phone"  />
                                <div className="">{errors.phone?.message}</div>
                            </div>

                            <div>
                            <Input  {...register("username")}  className={styles.login__input} placeholder='username'  />

                                <div className="">{errors.username?.message}</div>
                            </div>

                            <div>
                            <Input {...register("email")}  className={styles.login__input} placeholder='Email' />

                                <div className="">{errors.email?.message}</div>
                            </div>

                            <div>
                            <div className={styles.login__show}>
                                <Input  {...register("password")}  className={`${styles.login__input} ${styles.login__input_showPassword}`} placeholder='Password'  />
                                <p className={styles.login__showPassword}>SHOW</p>

                            </div>
                                <div className="">{errors.password?.message}</div>
                            </div>
                           
                            <p className={styles.login__forgotPassword}>Forgot PASSWORD?</p>
                            {/* <Button text="log in" className={styles.login__button} />
                             */}

                            <button type="submit">
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
