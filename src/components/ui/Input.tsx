interface Props{
    className: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: any,
    register: any
}
import { forwardRef } from 'react';
import styles from '../../styles/Home.module.scss'
const Input = (prop : any,ref:any) => {
    console.log(prop,"--")
    return ( 
        <input ref={ref} {...prop} />
     );
}
 
export default forwardRef(Input) ;