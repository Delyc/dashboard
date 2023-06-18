import styles from '../../../styles/Home.module.scss'
import SidebarItem from './SidebarItem';

interface Props {
    category: [],
    title: string
}
const SidebarCategory = ({ category, title }: Props) => {
    return (
        <section className={styles.sidebar_section}>
            <h3 className={styles.sidebarList_category}>{title}</h3>
            <ul className={styles.sidebarList}>
                {category.map((item: { icon: string; text: string }, index: number) => {
                    return (
                        <SidebarItem key={index} icon={item.icon} text={item.text} href={''} />
                    )
                })}
            </ul>
        </section>
    );
}

export default SidebarCategory;