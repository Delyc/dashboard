
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
            <Image src={logo} alt=" logo" />
            <div>
                <Input className={""} placeholder="Search for anything" name={""} value={""} onChange={undefined} />
                <Button hasIcon={true} icon={<Search />} className={styles.nav__button} />
            </div>

            <div>
                <Link href="">Docs</Link>
                <Notification />


                <div>
                    <p>Delyce</p>
                    <DownArrow />
                </div>



            </div>
        </section>
    );
}

export default Navbar;


