import styles from '../../../styles/Home.module.scss'
import Link from 'next/link';
import SidebarItem from './SidebarItem';

interface Props {
    category: any,
    title: string
}
const SidebarCategory = ({category, title}: Props) => {
    return ( 
        <section className={styles.sidebar_section}>
            <h3 className={styles.sidebarList_category}>{title}</h3>
            <ul className={styles.sidebarList}>
                {category.map((item : any, index: any) => {
                    return(
                        <SidebarItem key={index} icon={item.icon} text={item.text} />
                        // <Link href="" key={index} className={styles.sidebarList__item}>{item.icon} {item.text}</Link>
                    )
                })}
            </ul>
        </section>
     );
}
 
export default SidebarCategory;