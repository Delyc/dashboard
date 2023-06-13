interface Props{
    className: string,
    placeholder: string
}
import styles from '../../styles/Home.module.scss'
const Input = ({className, placeholder} : Props) => {
    return ( 
        <input className={`${className}  ${styles.login__input}`} placeholder={placeholder}/>
     );
}
 
export default Input;