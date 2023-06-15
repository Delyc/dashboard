import Select from 'react-select'
import styles from '../../styles/Home.module.scss'
import Input from './Input';
import Button from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
const FilterModal = ({setFilterModal,setUsers} : any) => {
    const [select,setSelect] = useState<string| undefined>()
    const [email,setEmail] = useState()   
    const [username,setUsername] = useState()   
    const [status, setStatus] = useState()
    const [organisationName, setOrganisationName] = useState([])
    const [dateJoined, setDateJoined] = useState()
    const [phone, setPhone] =useState()
    const [startDate, setStartDate] = useState(new Date());
    const submitFiter = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/users?isDelete=false${select ? `&organisationName=${select}`:""}${email ? `&email=${email}` : ""} ${username ? `&username=${username}` : ""} ${phone ? `&phone=${phone}` : ""}${dateJoined ? `&dateJoined=${dateJoined}` : ""}${status ? `&status=${status}` : ""}`);
            setUsers(res.data)
            console.log(res.data,"-----")
        } catch (error) {
            
        }
    }
    const organisations = [
        {
            value: 'lendsqr',
            label: 'lendqr'
        }
    ]
    return ( 
        <section className={styles.filter}>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Organisation</p>
                <Select onChange={((data)=>{setSelect(data?.value)})} options={organisations}/>
            </div>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Username</p>
                <Input className={''} placeholder={''} name={''}  onChange={((e:any)=>setUsername(e.target.value))} />
            </div>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Email</p>
                <Input className={''} placeholder={''} name={''} onChange={((e:any)=>setEmail(e.target.value))} />
            </div>


            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Date</p>
                <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} />
                {/* <Input className={''} placeholder={''} name={''}  onChange={((e:any)=>setUsername(e.target.value))} /> */}
            </div>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Status</p>
                <Select  options={organisations}/>
            </div>

            <div>
                <Button className={undefined} text='Reset' onClick={() => setFilterModal(false)}/>
                <Button className={undefined} text='Filter' onClick={(()=>submitFiter())}/>
            </div>
        
        </section>
     );
}
 
export default FilterModal;