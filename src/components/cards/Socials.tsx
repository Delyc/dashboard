import styles from '../../styles/Home.module.scss'
const Socials = () => {
    return ( 
        <section className={styles.user__info_wrapper}>
        <h1>Guarantor</h1>

        <div className={styles.personal_info}>
            <div>
                <h3>Twitter</h3>
                <p>@grace_effiom</p>
            </div>
            <div>
                <h3>facebook</h3>
                <p>Grace Effiom</p>
            </div>
            <div>
                <h3>instagram</h3>
                <p>@grace_effiom</p>
            </div>

        </div>
    </section>
     );
}
 
export default Socials;