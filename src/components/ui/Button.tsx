interface Props {
    text?: any,
    className: any,
    icon?: any,
    hasIcon?: boolean,
    onClick?: any,
    type?: any,
    data_testid ?: string,
    name?: string

}
const Button = ({ text, name, className, icon, onClick, type, data_testid }: Props) => {
    return (
        <button name={name} data-testid={data_testid} type={type} onClick={onClick} className={className}>{text} {icon}</button>
    );
}
export default Button;