import Select from 'react-select'
import styles from '../../styles/Home.module.scss'
import Input from './Input';
import Button from './Button';
const FilterModal = ({setFilterModal} : any) => {

    const organisations = [
        {
            value: 'Lendsqr',
            label: 'lendqr'
        }
    ]
    return ( 
        <section className={styles.filter}>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Organisation</p>
                <Select  options={organisations}/>
            </div>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Username</p>
                <Input className={''} placeholder={''} name={''} value={''} onChange={undefined} />
            </div>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Email</p>
                <Input className={''} placeholder={''} name={''} value={''} onChange={undefined} />
            </div>


            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Date</p>
                <Input className={''} placeholder={''} name={''} value={''} onChange={undefined} />
            </div>

            <div className={styles.filter__item}>
                <p className={styles.filter__item_name}>Status</p>
                <Select  options={organisations}/>
            </div>

            <div>
                <Button className={undefined} text='Reset' onClick={() => setFilterModal(false)}/>
                <Button className={undefined} text='Filter'/>
            </div>
        
        </section>
     );
}
 
export default FilterModal;