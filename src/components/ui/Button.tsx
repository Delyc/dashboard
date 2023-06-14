interface Props{
    text?: any,
    className: any,
    icon?: any,
    hasIcon ?: boolean,
    onClick ?: any

}
import styles from '../../styles/Home.module.scss'
const Button = ({text, className, icon, onClick} : Props) => {
    return ( 
        <button onClick={onClick} className={className}>{text} {icon}</button>
     );
}
export default Button;