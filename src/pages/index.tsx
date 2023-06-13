import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/ui/Button'
import loginImage from '../../public/assets/loginImage.svg'
import Input from '@/components/ui/Input'
import logo from '../../public/assets/logo.svg'

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logo_image} alt='Logo' />
        </div>
        <div className={styles.login}>
          <div className={styles.login__image_section}>
            <Image className={styles.login__image} src={loginImage} layout='fill' alt='man' />
          </div>
          <div className={styles.login__form_section}>
            <div className={styles.login__content}>
              <h1 className={styles.login__heading}>Welcome</h1>
              <p className={styles.login__description}>Enter details to login.</p>
            </div>
            <form className={`${styles.login__form}`}>
              <Input className={styles.login__input} placeholder='Email' />
              <Input className={styles.login__input} placeholder='Password' />
              <p className={styles.login__forgotPassword}>Forgot PASSWORD?</p>
              <Button text="log in" className={styles.login__button} />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
