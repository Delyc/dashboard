


import Link from "next/link";
import Sidebar from "./layouts/sidebar/Sidebar";
import Navbar from "./layouts/Navbar";
import styles from '../styles/Home.module.scss';
const Dashboard = () => {
    return (
        <>
            <section className={styles.dashboard}>

                {/* <section className={styles.wrappper}> */}
             <Navbar />

                {/* <Sidebar /> */}

                {/* <section className={styles.sidebar}>
                    <ul>Switch Organisation
                        <li>users</li>
                        <li>users</li>
                        <li>users</li>
                        <li>users</li>
                        <li>users</li>
                        <li>users</li>
                    </ul>
                </section>
                </section>
                <section>*/}
                    {/* </section>  */}
                <div style={{display:"flex"}}>
                <Sidebar />
                <div style={{flexGrow:"1", flex:"1", display:"block",width:"100%",backgroundColor:"blue"}}>
a
                </div>
                </div>
            </section>
               </>
    );
}

export default Dashboard;