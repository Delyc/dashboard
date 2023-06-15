import styles from '../../styles/Home.module.scss'
const PersonalInfo = () => {
    return ( 
        <section className={styles.user__info_wrapper}>
            <h1>Personal Information</h1>

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
                    <h3>Bvn</h3>
                    <p>07060780922</p>
                </div>
                <div>
                    <h3>Gender</h3>
                    <p>Female</p>
                </div>
                <div>
                    <h3>marital status</h3>
                    <p>Single</p>
                </div>
                <div>
                    <h3>Children</h3>
                    <p>None</p>
                </div>
                <div>
                    <h3>type of residence</h3>
                    <p>Parent{"’"}s Apartment</p>
                </div>
            </div>
        </section>
     );
}
 
export default PersonalInfo;