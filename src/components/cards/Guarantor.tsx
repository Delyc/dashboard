import styles from '../../styles/Home.module.scss'

const Guarantors = ({ guarantor }: any) => {
    return (
        <section className={styles.user__info_wrapper}>
            <h1>Guarantor</h1>
            {guarantor?.map((person: any, index: number) => {
                return (
                    <div key={index} className={styles.personal_info} style={{borderBottom: "1px solid #80808048", paddingBottom: "25px"}}>
                        <div>
                            <h3>Fulll name</h3>
                            <p>{person.name}</p>
                        </div>
                        <div>
                            <h3>phone number</h3>
                            <p>{person.phone}</p>
                        </div>
                        <div>
                            <h3>email address</h3>
                            <p>{person.email}</p>
                        </div>
                        <div>
                            <h3>relationship</h3>
                            <p>{person.relationship}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Guarantors;