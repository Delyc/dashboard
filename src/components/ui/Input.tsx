interface Props {
    className: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: any,
    register: any
}
import { forwardRef } from 'react';
const Input = (prop: any, ref: any) => {
    return (
        <input ref={ref} {...prop} />
    );
}
export default forwardRef(Input);