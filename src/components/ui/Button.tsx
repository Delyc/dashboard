interface Props {
    text?: any,
    className: any,
    icon?: any,
    hasIcon?: boolean,
    onClick?: any,
    type?: any

}
const Button = ({ text, className, icon, onClick, type }: Props) => {
    return (
        <button type={type} onClick={onClick} className={className}>{text} {icon}</button>
    );
}
export default Button;