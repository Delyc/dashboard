interface Props{
    text: String,
    className: String,

}
import styles from '../../styles/Home.module.scss'
const Button = ({text, className} : Props) => {
    return ( 
        <button className={`${className}  ${styles.button}`}>{text}</button>
     );
}
export default Button;