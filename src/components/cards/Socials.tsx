import styles from '../../styles/Home.module.scss'

interface Props{
    twitter: string,
    facebook: string,
    instagram: string
}
const Socials = ({twitter, facebook, instagram}: Props) => {
    return (
        <section className={styles.user__info_wrapper}>
            <h1>Socialss</h1>
            <div className={styles.personal_info}>
                <div>
                    <h3>Twitter</h3>
                    <p>@{twitter}</p>
                </div>
                <div>
                    <h3>facebook</h3>
                    <p>{facebook}</p>
                </div>
                <div>
                    <h3>instagram</h3>
                    <p>{instagram}</p>
                </div>
            </div>
        </section>
    );
}

export default Socials;