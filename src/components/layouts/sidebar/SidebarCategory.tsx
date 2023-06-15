import styles from '../../../styles/Home.module.scss'
import SidebarItem from './SidebarItem';

interface Props {
    category: any,
    title: string
}
const SidebarCategory = ({ category, title }: Props) => {
    return (
        <section className={styles.sidebar_section}>
            <h3 className={styles.sidebarList_category}>{title}</h3>
            <ul className={styles.sidebarList}>
                {category.map((item: any, index: any) => {
                    return (
                        <SidebarItem key={index} icon={item.icon} text={item.text} />
                    )
                })}
            </ul>
        </section>
    );
}

export default SidebarCategory;