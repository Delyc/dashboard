import styles from '../../styles/Home.module.scss'
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg'
import loginImage from '../../../public/assets/loginImage.svg'
import Input from '../ui/Input';
import Button from '../ui/Button';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from 'react';
import { useRouter } from 'next/router';

interface LoginPayload {
    email: string,
    password: string,
}

const Login = () => {
    const [showPassword, setShowPassword] = useState<any>(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState
    const router = useRouter()

    const loginUser = async (data: LoginPayload) => {
        try {
            const res = await axios.post("http://localhost:4000/login", data);
            toast.success("Logged successfully")
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.accessToken);
            router.push(router.query.redirectTo as string || '/dashboard')
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = (data: any) => {
        const loginData = {
            email: data.email,
            password: data.password,
        };
        loginUser(loginData);

    };
    return (
        <section className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} className={styles.logo_image} alt='Logo' />
            </div>
            <div className={styles.login}>
                <div className={styles.login__image_section}>
                    <Image className={styles.login__image} src={loginImage} alt='man' />
                </div>
                <div className={styles.login__form_section}>
                    <div className={styles.login__content}>
                        <h1 className={styles.login__heading}>Welcome</h1>
                        <p className={styles.login__description}>Enter details to login.</p>
                    </div>
                    <form className={`${styles.login__form}`} onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("email")} className={styles.login__input} placeholder='Email' name='email' />
                        <div className={styles.input__errors}>{errors.email?.message}</div>
                        <div className={styles.login__show}>
                            <Input {...register("password")} className={`${styles.login__input} ${styles.login__input_showPassword}`} placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} />
                            <p className={styles.login__showPassword} onClick={() => handleTogglePassword()}>{showPassword ? "Hide" : "SHOW"}</p>
                            <div className={styles.input__errors}>{errors.password?.message}</div>
                        </div>
                        <p className={styles.login__forgotPassword}>Forgot PASSWORD?</p>
                        <Button text="log in" className={styles.register__button} type='submit' />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;