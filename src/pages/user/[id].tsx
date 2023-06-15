import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BackwardArrow } from "@/components/ui/Svgs";
import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import styles from '../../styles/Home.module.scss'
import PersonalInfo from "@/components/cards/PersonalInfo";
import Education from "@/components/cards/Education";
import Socials from "@/components/cards/Socials";
import Guarantors from "@/components/cards/Guarantor";
import UserDetails from "@/components/sections/UserDetails";

const User = () => {
    const router = useRouter()
    const query = router.query
    const id = query.id
    const [user, setUser] = useState()
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/users/${id}`);
                setUser(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    return (
        <section className={styles.dashboard}>
            <Navbar />
            <div className={styles.container_wrapper}>
                <Sidebar />
                <div className={styles.users} >
                    <div onClick={(() => router.back())} className={styles.users__back}>
                        <BackwardArrow />
                        <p>Back to Users</p>
                    </div>
                    <UserDetails />
                    <div className={styles.user__fulldetails}>
                        <PersonalInfo />
                        <Education />
                        <Socials />
                        <Guarantors />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default User;