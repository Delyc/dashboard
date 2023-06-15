import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BackwardArrow, BigProfile, ColoredStar, Star } from "@/components/ui/Svgs";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/sidebar/Sidebar";
import styles from '../../styles/Home.module.scss'
import Button from "@/components/ui/Button";
import PersonalInfo from "@/components/cards/PersonalInfo";
import Education from "@/components/cards/Education";
import Socials from "@/components/cards/Socials";
import Guarantors from "@/components/cards/Guarantor";

const User = () => {


    const userNavigation = ["General Deatils", "Documents", "Bank Details", "Loans", "Savings", "App and System"]
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
        <section className={styles.dashboard}>
            <Navbar />
            <div className={styles.container_wrapper}>
                <Sidebar />
                <div className={styles.users} >
                    <div onClick={(() => router.back())} className={styles.users__back}>
                        <BackwardArrow />
                        <p>Back to Users</p>
                    </div>

                    <div className={styles.user__details}>

                        <div className={styles.user__actions}>

                            <h3>Users Details</h3>

                            <div className={styles.user__actions_buttons}>
                                <Button className={styles.user__blacklist} text='blacklist user' />
                                <Button className={styles.user__activate} text='activate user' />
                            </div>
                        </div>


                        <div className={styles.user__info}>

                            <div className={styles.user__info_details}>

                                <div className={styles.user__info_identity}>

                                    <div className={styles.user__info_profile}>
                                        <BigProfile />
                                    </div>

                                    <div className={styles.user__info_names}>
                                        <h3>Grace Effiom</h3>
                                        <p>LSQFf587g90</p>
                                    </div>

                                </div>

                                <div className={styles.user__info_tier}>
                                    <p>User{"'"}s Tier</p>
                                    <div>
                                        <ColoredStar />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>

                                <div className={styles.user__info_account}>
                                    <h3>₦200,000.00</h3>
                                    <p>9912345678/Providus Bank</p>
                                </div>

                            </div>

                            <div className={styles.user__info_nav}>

                                {userNavigation.map((nav, index) => {
                                    return(
                                        <Link key={index} href="" className={styles.user__info_link}>{nav}</Link>
                                    )
                                })}

                            </div>

                        </div>
                    </div>

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