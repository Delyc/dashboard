import Button from "../ui/Button";
import styles from '../../styles/Home.module.scss'
import { BigProfile, ColoredStar, Star } from "../ui/Svgs";
import Link from "next/link";
const UserDetails = () => {
    const userNavigation = ["General Deatils", "Documents", "Bank Details", "Loans", "Savings", "App and System"]

    return (
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
                        return (
                            <Link key={index} href="" className={styles.user__info_link}>{nav}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default UserDetails;