import styles from '../../styles/Home.module.scss'
const PersonalInfo = ({fullName, phone, email, bvn, child, residence, status, gender}: any) => {
    return (
        <section className={styles.user__info_wrapper}>
            <h1>Personal Information</h1>
            <div className={styles.personal_info}>
                <div>
                    <h3>Fulll name</h3>
                    <p>{fullName}</p>
                </div>
                <div>
                    <h3>phone number</h3>
                    <p>{phone}</p>
                </div>
                <div>
                    <h3>email address</h3>
                    <p>{email}</p>
                </div>
                <div>
                    <h3>Bvn</h3>
                    <p>{bvn}</p>
                </div>
                <div>
                    <h3>Gender</h3>
                    <p>{gender}</p>
                </div>
                <div>
                    <h3>marital status</h3>
                    <p>{status}</p>
                </div>
                <div>
                    <h3>Children</h3>
                    <p>{child}</p>
                </div>
                <div>
                    <h3>type of residence</h3>
                    <p>{residence}</p>
                </div>
            </div>
        </section>
    );
}

export default PersonalInfo;