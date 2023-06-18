import styles from '../../styles/Home.module.scss'
const Education = ({education, employment, sector, expertise, officeEmail, income, loan}: any) => {
    return (
        <section className={styles.user__info_wrapper}>
            <h1>Education and Employment</h1>
            <div className={styles.personal_info}>
                <div>
                    <h3>level of education</h3>
                    <p>{education}</p>
                </div>
                <div>
                    <h3>employment status</h3>
                    <p>{employment}</p>
                </div>
                <div>
                    <h3>sector of employment</h3>
                    <p>{sector}</p>
                </div>
                <div>
                    <h3>Duration of employment</h3>
                    <p>{expertise}</p>
                </div>
                <div>
                    <h3>office email</h3>
                    <p>{officeEmail}</p>
                </div>
                <div>
                    <h3>Monthly income</h3>
                    <p>{income}</p>
                </div>
                <div>
                    <h3>loan repayment</h3>
                    <p>{loan}</p>
                </div>
            </div>
        </section>
    );
}

export default Education;