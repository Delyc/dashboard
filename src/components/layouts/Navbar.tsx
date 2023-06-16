
import Image from "next/image";
import logo from "../../../public/assets/logo.svg"
import Input from "../ui/Input";
import Button from "../ui/Button";
import { DownArrow, Notification, Search } from "../ui/Svgs";
import styles from '../../styles/Home.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";
import {toast} from'react-toastify'
const Navbar = () => {
    const router = useRouter()
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    const handleLogout = () => {
        toast.success("Logged out successfully")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        window.location.reload();
    }

    return (
        <section className={styles.nav}>
            <Image src={logo} alt=" logo" height={30} width={115} />
            <div className={styles.nav__details}>
                <div className={styles.nav__search}>
                    <Input className={styles.nav__input} placeholder="Search for anything" name={""} value={""} onChange={undefined} />
                    <Button hasIcon={true} icon={<Search />} className={styles.nav__button} />
                </div>
                <div className={styles.nav__profile}>
                    <Link href="">Docs</Link>
                    <Notification />
                    <div className={styles.nav__user}>
                        <p>{user?.username}</p>
                        <div onClick={handleLogout}>
                            <DownArrow />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Navbar;


