import styles from '../../styles/Home.module.scss'
const Education = () => {
    return ( 
        <section className={styles.user__info_wrapper}>
            <h1>Education and Employment</h1>

            <div className={styles.personal_info}>
                <div>
                    <h3>level of education</h3>
                    <p>B.Sc</p>
                </div>
                <div>
                    <h3>employment status</h3>
                    <p>Employed</p>
                </div>
                <div>
                    <h3>sector of employment</h3>
                    <p>FinTech</p>
                </div>
                <div>
                    <h3>Duration of employment</h3>
                    <p>2 years</p>
                </div>
                <div>
                    <h3>office email</h3>
                    <p>grace@lendsqr.com</p>
                </div>
                <div>
                    <h3>Monthly income</h3>
                    <p>₦200,000.00- ₦400,000.00</p>
                </div>
                <div>
                    <h3>loan repayment</h3>
                    <p>40,000</p>
                </div>
            </div>
        </section>
     );
}
 
export default Education;