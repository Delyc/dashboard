import Link from "next/link";
import styles from '../../../styles/Home.module.scss'

const SidebarItem = ({ icon, text, href }: any) => {
    return (
        <Link href=""  className={styles.sidebarList__item}>{icon} {text}</Link>
    );
}
export default SidebarItem;