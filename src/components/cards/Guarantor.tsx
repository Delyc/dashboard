import styles from '../../styles/Home.module.scss'
const Guarantors = () => {
    return (
        <section className={styles.user__info_wrapper}>
            <h1>Guarantor</h1>
            <div className={styles.personal_info}>
                <div>
                    <h3>Fulll name</h3>
                    <p>Grace Effiom</p>
                </div>
                <div>
                    <h3>phone number</h3>
                    <p>07060780922</p>
                </div>
                <div>
                    <h3>email address</h3>
                    <p>grace@gmail.com</p>
                </div>
                <div>
                    <h3>relationship</h3>
                    <p>Sister</p>
                </div>
            </div>
        </section>
    );
}

export default Guarantors;