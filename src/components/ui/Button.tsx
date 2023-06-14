interface Props{
    text?: any,
    className: any,
    icon?: any,
    hasIcon ?: boolean

}
import styles from '../../styles/Home.module.scss'
const Button = ({text, className, icon, hasIcon} : Props) => {
    return ( 
        <button className={className}>{text} {icon}</button>
     );
}
export default Button;