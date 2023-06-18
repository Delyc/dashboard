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
import { toast } from "react-toastify";

const User = ({refetch}: any) => {
    const router = useRouter()
    const query = router.query
    const id = query.id
    const [user, setUser] = useState<any>()
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/lendUsers/${id}`);
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
                    <UserDetails user={user} />
                    <div className={styles.user__fulldetails}>
                        <PersonalInfo fullName={user?.fullName} phone={user?.phone} email={user?.email} bvn={user?.bvn} gender={user?.gender} status={user?.status} child={user?.children} residence={user?.residence}/>
                        <Education  education={user?.level} employment={user?.employment} sector={user?.sector} expertise={user?.expertise} officeEmail={user?.officeEmail} income={user?.income} loan={user?.loanRepayment} />
                        <Socials twitter={user?.twitter} facebook = {user?.facebook} instagram ={user?.instagram}/>
                        <Guarantors guarantor={user?.guarantor}/>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default User;