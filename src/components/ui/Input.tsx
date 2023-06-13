interface Props{
    className: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: any
}
import styles from '../../styles/Home.module.scss'
const Input = ({className, placeholder, value, name, onChange} : Props) => {
    return ( 
        <input className={`${className}  ${styles.login__input}`} placeholder={placeholder} name={name} onChange={onChange} value={value}/>
     );
}
 
export default Input;