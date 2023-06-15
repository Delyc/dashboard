import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/ui/Button'
import loginImage from '../../../public/assets/loginImage.svg'
import Input from '@/components/ui/Input'
import logo from '../../../public/assets/logo.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from 'next/link'
import { toast } from 'react-toastify';

interface RegisterPayload {
    organisationName: string,
    phone: string,
    status: string,
    dateJoined: string,
    email: string,
    password: string,
    username: string
}
const Register = () => {
    const [showPassword, setShowPassword] = useState<any>(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const validationSchema = Yup.object().shape({
        organisationName: Yup.string().required("Organisation Name is required"),
        phone: Yup.string().required("Phone is required"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("password is required"),
        username: Yup.string().required("password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
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
    const router = useRouter()
    const createUser = async (data: RegisterPayload) => {
        try {
            const res = axios.post("http://localhost:4000/users", data);
            toast.success("Registration successful")
            router.push("/login")
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (data: any) => {
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
    };

    return (
        <section className={styles.container__register}>
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
                        <p className={styles.login__description}>Enter details to register.</p>
                    </div>
                    <form className={`${styles.login__form}`} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.input_group}>
                            <div>
                                <Input {...register("organisationName")} className={styles.login__input} placeholder='Organisation name' name='organisationName' />
                                <div className={styles.input__errors}>{errors.organisationName?.message}</div>
                            </div>
                            <div>
                                <Input {...register("phone")} className={styles.login__input} placeholder='phone' name="phone" />
                                <div className={styles.input__errors}>{errors.phone?.message}</div>
                            </div>
                        </div>
                        <div className={styles.input_group}>
                            <div>
                                <Input  {...register("username")} className={styles.login__input} placeholder='username' />
                                <div className={styles.input__errors}>{errors.username?.message}</div>
                            </div>
                            <div>
                                <Input {...register("email")} className={styles.login__input} placeholder='Email' />
                                <div className={styles.input__errors}>{errors.email?.message}</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.login__show}>
                                <Input  {...register("password")} className={`${styles.login__input} ${styles.login__input_showPassword}`} placeholder='Password' type={showPassword ? 'text' : 'password'} />
                                <p className={styles.login__showPassword} onClick={() => handleTogglePassword()}>{showPassword ? "Hide" : "SHOW"}</p>
                            </div>
                            <div className={styles.input__errors}>{errors.password?.message}</div>
                        </div>
                        <p className={styles.login__forgotPassword}>Forgot PASSWORD?</p>
                        <Button type='submit' text='Register' className={styles.register__button} />
                        <p>Already have an account ? <Link href="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Register;
