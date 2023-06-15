
import Image from "next/image";
import logo from "../../../public/assets/logo.svg"
import Input from "../ui/Input";
import Button from "../ui/Button";
import { DownArrow, Notification, Search } from "../ui/Svgs";
import styles from '../../styles/Home.module.scss';
import Link from "next/link";

const Navbar = () => {
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
                        <p>Delyce</p>
                        <DownArrow />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;


