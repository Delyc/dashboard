interface Props{
    icon: any,
    text: string,
    count : number;
    background: string;
}
import styles from '../../styles/Home.module.scss'
const UserRecordCount = ({icon, text, count, background}: Props) => {
    // const reducedBrightness = 'brightness(300%)';
    return ( 
        <article className={styles.record}>
            <div  style={{
        background: `${background}`,
        // filter: reducedBrightness,
      }} className={styles.icon_circle}>
                {icon}
            </div>
            <p className={styles.user__title}>{text}</p>
            <p className={styles.user__count}>{count}</p>

        </article>
     );
}
 
export default UserRecordCount;